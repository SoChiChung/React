/*
 * @Author: SoChichung
 * @Date: 2022-08-03 19:24:35
 * @LastEditors: SoChichung
 * @LastEditTime: 2022-08-06 09:16:11
 * @Description:
 *
 * Copyright (c) 2022 by SoChichung ddeadwings@gmail.com, All Rights Reserved.
 */
import mockjs from "mockjs";
let Mock = mockjs;
var random = Mock.Random;
var data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  "list|1-10": [
    {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      "id|+1": 1,
      "string|1-10": " AAHPH",
    },
  ],
  "myobj|2": {
    310000: "上海市",
    320000: "江苏省",
    330000: "浙江省",
    340000: "安徽省",
  },
});
export { data };
