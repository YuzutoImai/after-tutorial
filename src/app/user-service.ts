// Angular 20のインポート
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

// サービスをアプリケーション全体で利用可能にする
@Injectable({
  providedIn: 'root', // ルートインジェクターに登録
})
export class UserService {
  // HttpClientをinject関数で依存性注入（Angular 20推奨スタイル）
  private readonly http = inject(HttpClient);

  // APIのベースURL
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/users';

  /**
   * ユーザーリストを取得するメソッド
   * @returns ユーザー配列のObservable
   */
  getUsers(): Observable<User[]> {
    // JSONPlaceholder APIは直接配列を返すため、mapは不要
    return this.http.get<User[]>(this.apiUrl);
  }
}
