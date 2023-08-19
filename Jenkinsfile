pipeline {
    agent any
    stages {
        stage('Cleaning up previous version'){
            steps {
                script {
                    try {
                        echo 'Stopping container'
                        sh 'docker stop $(docker ps -a -q)'
                    } catch (Exception e) {
                        echo 'No containers running'
                    }

                    try {
                        echo 'Removing previous images'
                        sh """docker rm banjar_frontend banjar_backend """
                    } catch (Exception e) {
                        echo 'Images are not present'
                    }
                }
                
            }
            
        }
        stage('Building and starting new images'){
            steps {
                sh 'docker-compose up'
            }
        }
    }
}