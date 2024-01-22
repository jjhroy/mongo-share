// baidu的搜索建议返回
export interface IBaiduSuggestion {
  // 输入的搜索关键词
  q: string;
  // 不知道干嘛的
  p: boolean;
  // 联想返回
  s: string[];
}

// 搜索引擎type
export interface ISearchEngine {
  key: 'baidu' | 'google' | 'bing';
  color: string;
  icon: string;
  baseUrl: string;
}
