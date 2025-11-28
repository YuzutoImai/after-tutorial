// Angular 20の主要な機能をインポート
import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { UserListItem } from './user-list-item/user-list-item';
import { AppUsecase } from './app-usecase';


// ルートコンポーネントの定義
@Component({
  selector: 'app-root',
  standalone: true, // スタンドアロンコンポーネント（モジュール不要）
  // AsyncPipeを追加（| async を使うために必要）
  imports: [UserListItem, AsyncPipe], // このコンポーネントで使用する他のコンポーネント・ディレクティブ
  // AppUsecaseをこのコンポーネント専用のプロバイダーとして登録
  // （providedIn: 'root'の場合は不要だが、スコープを限定したい場合に使用）
  providers: [AppUsecase],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // AppUsecaseをinject関数で依存性注入（Angular 20推奨スタイル）
  private readonly usecase = inject(AppUsecase);
  
  // AppUsecaseが公開する状態Observable
  // テンプレートから直接参照できるようにpublicプロパティとして公開
  readonly state$ = this.usecase.state$;

  constructor() {
    // コンポーネント初期化時にUsecaseの初期化処理を実行
    // ngOnInitの代わりにconstructorを使用（Angular 20推奨）
    this.usecase.initialize();
  }
}
