
class Node { 
	constructor(children, isWord) {
		this.children = children;
		this.isWord = isWord;
	}
}
class Solution {
	constructor() {
		this.trie = null;
	}

	build(words) {
		this.trie = new Node({}, false);
		let word;
		let current;
		for(word of words) {
			current = this.trie;
			
			let char;
			for(char of word) {

				if (!(char in current.children)) {
					current.children[char] = new Node({}, false);
				}


				current = current.children[char];



			}
			current.isWord = true;
		}
	}
	autocomplete(snippet) {
		let current = this.trie;
		let char;
		for (char of snippet) {
			if (!(char in current.children)) {
				return [];
			}
			current = current.children[char];
		}
		return this._findWordsFromNode(current, snippet);
	}
	_findWordsFromNode(node, prefix) {
		let words = [];
		if (node.isWord) {
			words += "• " + prefix + "\n";
		}
		let char;
		for (char in node.children) {
			words += this._findWordsFromNode(node.children[char], prefix + char);
		}

		let wordList = words
		return wordList;
	}
}

// dog door dodge