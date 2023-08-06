pipeline {
    agent any
    stages{
        stage('Environment Setup'){
            steps {
                echo 'Environment setup'
                sh 'rm -f .env'
                sh 'touch .env'
                sh """
                    echo "MONGOURI=${env.MONGOURI}" >> .env
                """
            }
        }
        stage('Docker') {
            steps {
                sh 'docker-compose up' 
            }
        }
    }
}