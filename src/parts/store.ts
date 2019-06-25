import { observable } from 'mobx';

export default {

    /**
     * 购物车
     */
    cartStore: observable({

        /**
         * 购物车数量
         */
        count: 0,
    
        /**
         * 设置购物车数量
         * 
         * @param {Number} num 需要设置的购物车数量
         */
        set(num: number) {
            this.count = parseInt(num.toString());
        },
    
        /**
         * 增加购物车数量
         * 
         * @param {Number} num 需要增加的购物车数量
         */
        add(num: number): void {
            this.count += parseInt(num.toString());
        },
    
        /**
         * 减少购物车数量
         * 
         * @param {Number} num 需要减少的购物车数量
         */
        sub(num: number): void {
            this.count -= parseInt(num.toString());
        }
    })
} 
