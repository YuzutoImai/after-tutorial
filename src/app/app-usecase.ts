// Angular 20のインポート
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from './user-service';
import { User } from './user';

// アプリケーション全体の状態を定義
export type State = {
  users: User[];
};

// Usecaseクラス（状態管理サービス）
@Injectable({
  providedIn: 'root' // ルートインジェクターに登録
})
export class AppUsecase {
  // UserServiceをinject関数で依存性注入（Angular 20推奨スタイル）
  private readonly userService = inject(UserService);

  // BehaviorSubjectで状態を管理
  // BehaviorSubjectは現在の値を保持し、新しい購読者に即座に最新値を送信する
  private readonly store = new BehaviorSubject<State>({
    users: [],
  });

  /**
   * 状態をObservableとして公開
   * コンポーネントはこれを購読して状態の変更を監視する
   */
  get state$(): Observable<State> {
    return this.store.asObservable();
  }

  /**
   * 初期化メソッド
   * ユーザーデータを取得して状態を更新する
   */
  initialize(): void {
    this.userService.getUsers().subscribe((users) => {
      // 現在の状態を取得
      const state = this.store.getValue();
      // 新しい状態を作成してストアを更新
      this.store.next({
        ...state,
        users,
      });
    });
  }
}
