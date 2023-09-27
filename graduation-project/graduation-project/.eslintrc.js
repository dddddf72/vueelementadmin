module.exports = {
  "parser": "vue-eslint-parser",
  parserOptions: {    
        // Use babel-eslint for JavaScript    
        'parser': 'babel-eslint',    
        'ecmaVersion': 2017,    
        // With import/export syntax    
        'sourceType': 'module' 
    }, 
    env: {
      browser: true,
      node: true,
      es6: true,
    },
  plugins: [
  	'html',
    'vue'	
  ],
  rules: {
    "quotes": [0, "single"],	// 禁用引号检查	引号类型 `` "" ''
    "semi": 0,  				// 禁用分号检查	[1, "always"]: 需要分号, [2, "never"]: 不加分号, 0: 禁用此项
    "vue/html-self-closing": "off",
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }] ,
    "indent": "off",			// 禁用缩进检查
  }
}