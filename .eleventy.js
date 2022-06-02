module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./css');
    eleventyConfig.addPassthroughCopy('./fonts');
    eleventyConfig.addPassthroughCopy('./icons');
    eleventyConfig.addPassthroughCopy('./images');
    eleventyConfig.addPassthroughCopy('./js');
}