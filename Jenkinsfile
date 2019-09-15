pipeline {
  agent {
    docker {
      image 'node:latest'
      args """
        --volume /var/run/docker.sock:/var/run/docker.sock
        --volume /home/jenkins_home:/var/jenkins_home
        --volume /usr/bin/docker:/usr/bin/docker
      """
       }
  }
  environment {
    HOME = '.'
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