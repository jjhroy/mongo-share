/**
 * 一个提供WEB图片弹窗的工具库
 */
import type { IBoardOptions } from './type';

// 把board插入dom
export const insertBoard = (
  boardOptions: IBoardOptions
) => {
  const boardTemplate = generateTemplate(
    boardOptions.style,
    boardOptions.imgUrl
  );

  // 插入根节点
  document.body.appendChild(boardTemplate);
};

const generateTemplate = (
  style: string,
  imgUrl: string[]
) => {
  const baseTemplate = document.createElement('div');
  if (style === 'default') {
    imgUrl?.forEach((img) => {
      const imgTag = document.createElement('img');
      imgTag.src = img;
      baseTemplate.append(imgTag);
    });
  }
  return baseTemplate;
};
