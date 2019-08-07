// 引入mysql的配置文件
const db = require('../config/index');
const Sequelize = db.sequelize;
// 引入数据表模型
const UserInfo = Sequelize.import('../schema/userInfo');
UserInfo.sync({
    force: false
}); //自动创建表

class UserInfoModel {
    /**
     * 获取邮箱
     * @param email 邮箱
     * @returns {Promise<Model>}
     */
    static async getUserEmail(email) {
        return await UserInfo.findOne({
            where: {
                email
            }
        });
    }
    
    /**
     * @description: 注册
     */
    static async register(ctx) {
        return await UserInfo.create({
            userName: ctx.userName || '',
            email: ctx.email || '',
            password: ctx.password || ''
        });
    }


     /**
      * @description: 登录
      */
    static async usreLogin(ctx) {
         return await UserInfo.findOne({
             where: {
                email: ctx.email || '',
                password: ctx.password || ''
             }
         });
    }


    /**
     * @description: 更改用户密码
     */
    static async updatePass(email, password) {
        return await UserInfo.update(
            {
                password
            },
            {
                where: {
                    email
                }
            }
        );
    }
}

module.exports = UserInfoModel;
