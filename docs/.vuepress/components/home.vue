<template>
    <div class="my-page">
        <div class="search">
            <div class="ipt">
                <input
                    type="text"
                    placeholder="请输入"
                    v-model="searchVal"
                    @keydown.enter="search"
                >
                <!-- <button class="search-btn" @click="search">百度搜索</button> -->
                <select class="search-btn" v-model="iptType">
                    <option value ="baidu">百度</option>
                    <option value ="fanyi">翻译</option>
                </select>
            </div>
        </div>
        <div class="container">
            <div class="p-categorys">
                <div
                    class="p-category"
                    v-for="(Pcategory, PcategoryIndex) in data"
                    :key="PcategoryIndex"
                >
                    <div class="p-category-name">{{ Pcategory.text }}</div>
                    <div class="p-category-children">
                        <div
                            class="p-category-children-name"
                            v-for="(Ccategory, CcategoryIndex) in Pcategory.children"
                            :key="CcategoryIndex"
                            @click="currentCategoryClick(PcategoryIndex, CcategoryIndex)"
                        >{{ Ccategory.text }}</div>
                    </div>
                </div>
            </div>
            <div class="my-links">
                <div
                    class="tag"
                    v-for="(tag, tagIndex) in data[current.parentIndex].children[current.childIndex].children"
                    :key="tagIndex"
                    :title="tag.link"
                    @click="go(tag.link)"
                >
                    {{ tag.text }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import allLabel from './json/allLabel.js'

export default {
    data() {
        return {
            iptType: 'baidu',
            searchVal: '',
            data: allLabel,
            current: {
                parentIndex: 0,
                childIndex: 0
            }
        }
    },

    methods: {
        search() {
            if (!this.searchVal) return
            window.open(
                {
                    baidu: `https://www.baidu.com/s?ie=utf-8&wd=${this.searchVal}`,
                    fanyi: `https://translate.google.cn/?sl=zh-CN&tl=en&text=${this.searchVal}&op=translate`
                }[this.iptType]
            )
        },
        currentCategoryClick(parentIndex, childIndex) {
            this.current = { parentIndex, childIndex }
        },
        go(link) {
            window.open(link)
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.my-page {
    position: fixed;
    top: 58px;
    left: 0;
    width: 100vw;
    font-size: 14px;
    height: calc(100vh - 60px);
    margin-top: 0 !important;
    padding-top: 24px;
    background: rgb(248, 246, 243);
    z-index: 11;
}
.search {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
}
.ipt {
    position: relative;
    border: 1px solid #666;
    border-radius: 6px;
    overflow: hidden;
}
.ipt > input {
    height: 32px;
    width: 400px;
    text-indent: 8px;
    border: none;
    outline: none;
}
.ipt > .search-btn {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 10px;
    height: 32px;
    cursor: pointer;
    background: var(--primary-color);
    border: none;
    outline: none;
}
.container {
    position: relative;
    height: calc(100% - 78px);
}
.p-categorys {
    flex: 1;
    height: 100%;
    padding: 30px 400px 0 110px;
    overflow-y: scroll;
}
.p-category {
    padding: 10px 0;
    border-radius: 10px;
    margin-bottom: 50px;
    box-shadow:  20px 20px 60px #bebebe,
             -20px -20px 60px #ffffff;
}
.p-category-name {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
}
.p-category-children {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.p-category-children-name {
    padding: 6px 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    background: #fff;
    border-radius: 4px;
    cursor: pointer;
}
.my-links {
    position: absolute;
    top: 30px;
    right: 80px;
    width: 250px;
    height: 100%;
    padding: 24px;
    box-shadow:  20px 20px 60px #bebebe,
             -20px -20px 60px #ffffff;
    border-radius: 10px;
}
.tag {
    margin-bottom: 10px;
    padding: 6px 10px;
    text-align: center;
    line-height: 22px;
    background: #fff;
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;
}
</style>