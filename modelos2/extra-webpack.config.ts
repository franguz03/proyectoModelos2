const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
import * as webpack from 'webpack';


export default (config: webpack.Configuration) => {
  config?.plugins?.push(new MonacoWebpackPlugin());
  // Remueve las reglas de carga existentes para archivos css
  const cssRuleIdx = config?.module?.rules?.findIndex((rule: any) =>
   rule.test && rule.test.toString().includes(':css')
  );
  console.log(cssRuleIdx);
  if (cssRuleIdx !== -1) {
    config?.module?.rules?.splice(cssRuleIdx!, 1);
  }
  config?.module?.rules?.push(
   
    {
      
    test: /\.css$/,
    exclude: [],
    use: ['style-loader', 'css-loader'],
  },
  {
    test: /\.ttf$/,
    use: ['file-loader'],
  }
  );
  return config;
};