// ユーザーデータの型定義
// JSONPlaceholder APIのレスポンス構造に対応
export interface User {
    id: number;        // ユーザーID
    name: string;      // ユーザーのフルネーム
    username: string;  // ユーザー名
    email: string;     // メールアドレス
}