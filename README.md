# clasp-react-sample

## 必須環境

- Node.js v24

## クイックスタート

1. WebブラウザでApp Scriptのプロジェクトを作成する。
    - https://script.google.com/home
    - 

2. `.env.template` をコピーして `.env` を作成する。
    - 手順1で作成したプロジェクトのIDを記載すること。
        - プロジェクトのURLが `https://script.google.com/home/projects/xxxxx/edit` のとき、 `xxxxx` がID

3. 環境の初期設定を行う。
    ```
    npm ci
    npm run setup
    npx clasp login
    ```

4. Webサービスを公開する。
    ```
    npm run release
    npx clasp open-web-app
    ```
