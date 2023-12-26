export interface IBoardOptions {
  /**
   * board标识，多个需保证唯一性
   * */
  sign: string;
  /**
   * board风格
   * */
  style: string;
  /**
   * board图片地址
   * */
  imgUrl: string[];
  /**
   * board过期时间
   * */
  expirationTime: string;
  /**
   * board状态码
   * */
  statusCode?: 0 | 1 | 2 | 3 | 4;
  /**
   * board图片切换的间隔，仅imgUrl的图片超过一张时有效
   * */
  swipeTimeInterval?: number;
  /**
   * board是否只弹一次
   * */
  onlyOnce?: boolean;
  /**
   * board为只弹一次时,是否弹出过了
   * */
  onlyOnceShowed?: boolean;
  /**
   * board不为只弹一次时,记录下首次弹出时间
   * */
  lastPopTime?: number;
  /**
   * board不为只弹一次时,board再次弹出的间隔，单位为s
   * */
  popTimeInterval?: number;
  /**
   * board是否可关闭
   * */
  closeAble?: boolean;
  /**
   * board是否会自动关闭
   * */
  autoClose?: boolean;
  /**
   * 多久后board自动关闭
   * */
  autoCloseInterval?: number;
  /**
   * 是否展示自动关闭的tip
   * */
  isShowAutoCloseTip?: boolean;
  /**
   * board被成功查看后的回调
   * */
  boardVisitCallback?: () => void;
  /**
   * board被成功点击后的回调
   * */
  boardClickCallback?: () => void;
}
