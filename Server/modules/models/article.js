import Sequelize from '../index'
// 引入数据表模型
const Article = Sequelize.import('../../schema/article');


class ArticleModel {
    /**
     * 创建文章模型
     * @param data
     * @returns {Promise<*>}
     */
    static async createArticle(data) {
        return await Article.create({
            title: data.title || '', //标题
            author: data.author || '', //作者
            content: data.content || '', //文章内容
            category: data.category ||  ''//文章分类
        });
    }

    /**
     * 查询文章的详情
     * @param id 文章ID
     * @returns {Promise<Model>}
     */
    static async getArticleDetail(id) {
        return await Article.findOne({
            where: {
                id
            }
        });
    }
}

module.exports = ArticleModel;

