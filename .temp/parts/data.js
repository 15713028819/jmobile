/**
 * 首页
 */
export default {
  /**
   * 首页
   */
  index: {
    data: {
      name: '',
      count: 0
    },
    mock: {
      load: {
        random: { success: 100, fail: { power: 0, logic: 0, error: 0, offline: 0 } },
        list: [{ name: 'yuantao', count: 20 }, { name: 'fule', count: 18 }, { name: 'yuhan', count: 12 }, { name: 'meijia', count: 15 }]
      }
    }
  }
};