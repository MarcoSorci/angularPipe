import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';

@Pipe({
  name: 'orderUsersByRanking',
})
export class OrderUsersByRankingPipe implements PipeTransform {
  transform(value: User[], ...args: unknown[]): User[] {
    return value.sort((a, b) =>
      args[0] === 'descending' ? b.ranking - a.ranking : a.ranking - b.ranking
    );
  }
}
