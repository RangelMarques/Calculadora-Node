export default function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');

  grunt.initConfig({
    watch: {
      js: {
        files: ['Calc.js', 'Calc.spec.js'],
        tasks: ['teste']
      }
    },
    shell: {
      teste: {
        options: { stdout: true },
        command: 'Jasmine-node Calc.spec.js'
      }
    }
  });

  grunt.registerTask('teste', 'shell:teste');
}
