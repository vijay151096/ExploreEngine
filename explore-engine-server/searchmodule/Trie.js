class TrieNode {
    constructor() {
        this.childrens = {};
        this.end = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.childrens[char]) {
                node.childrens[char] = new TrieNode();
            }
            node = node.childrens[char];
        }
        node.end = true;
    }
    search(prefix) {
        let node = this.root;
        let results = [];
        const dfs = (node, word) => {
            if (node.end) {
                results.push(word);
            }
            for (let char in node.childrens) {
                dfs(node.childrens[char], word + char);
            }
        };
        dfs(node, "");
        return results.filter(word => word.includes(prefix));
    }
}

module.exports = Trie
