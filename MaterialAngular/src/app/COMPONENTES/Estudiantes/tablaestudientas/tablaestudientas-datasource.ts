import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TablaestudientasItem {
  'id': string,
  'id_persona': string,
  'nombre': string,
  'apellido': string,
  'fecha_nacimiento': string;
  'direccion': string,
  'carnet': string,
  'fecha_ingreso': string,
  'status': string,
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TablaestudientasItem[] = [];

/**
 * Data source for the Tablaestudientas view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TablaestudientasDataSource extends DataSource<TablaestudientasItem> {
  data: TablaestudientasItem[] = [];
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TablaestudientasItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TablaestudientasItem[]): TablaestudientasItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TablaestudientasItem[]): TablaestudientasItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'id': return compare(a.id, b.id, isAsc);
        case 'id_persona': return compare(+a.id_persona, +b.id_persona, isAsc);
        case 'nombre': return compare(+a.nombre, +b.nombre, isAsc);
        case 'apellido': return compare(+a.apellido, +b.apellido, isAsc);
        case 'fecha_nacimiento': return compare(+a.fecha_nacimiento, +b.fecha_nacimiento, isAsc);
        case 'direccion': return compare(+a.direccion, +b.direccion, isAsc);
        case 'carnet': return compare(+a.carnet, +b.carnet, isAsc);
        case 'fecha_ingreso': return compare(+a.fecha_ingreso, +b.fecha_ingreso, isAsc);
        case 'status': return compare(+a.status, +b.status, isAsc);  
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number | Date, b: string | number| Date, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
