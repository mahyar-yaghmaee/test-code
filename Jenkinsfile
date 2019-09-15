pipeline {
  agent {
    docker {
      image 'node:latest'
      }
  }

  stages {
    stage('setup') {
      steps {
        sh '''
        npm install
        '''
      }
    }
    stage('test') {
      steps {
        sh '''
        npm test
        '''
      }
    }
  }

  post {
    always {
      dir(env.WORKSPACE) {
        sh  'rm -R *'
      }
    }
  }

}