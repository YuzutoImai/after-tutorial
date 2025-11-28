// アプリケーション全体の設定をインポート
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

// アプリケーション設定の定義
export const appConfig: ApplicationConfig = {
  providers: [
    // グローバルエラーリスナーを提供
    provideBrowserGlobalErrorListeners(),
    // Zone.jsによる変更検知を設定（イベントの結合を有効化）
    provideZoneChangeDetection({ eventCoalescing: true }),
    // ルーティング機能を提供
    provideRouter(routes),
    // HTTPクライアント機能を提供（API通信に必要）
    provideHttpClient()
  ]
};
