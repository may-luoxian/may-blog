module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'prismjs',
      {
        languages: ['javascript', 'typescript', 'css', 'sql', 'java', 'c', 'cpp', 'nginx', 'markup', 'shell', 'json', 'jsx', 'tsx'],
        plugins: ['line-numbers', 'toolbar', 'copy-to-clipboard'],
        theme: 'okaidia',
        css: true
      }
    ]
  ]
}
