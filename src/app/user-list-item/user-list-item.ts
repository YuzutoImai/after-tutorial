// Angular 20のインポート
import { Component, input } from '@angular/core';
import { User } from '../user';


// ユーザーリストアイテムコンポーネント
@Component({
  selector: 'user-list-item',
  standalone: true, // スタンドアロンコンポーネント
  imports: [], // CommonModuleは不要
  templateUrl: './user-list-item.html',
  styleUrl: './user-list-item.css',
})
export class UserListItem {
  // Angular 20の新しいinput関数を使用（@Inputデコレータの代わり）
  // required: true で必須プロパティに設定
  user = input.required<User>();
}
