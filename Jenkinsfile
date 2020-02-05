pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        //stage('Lint') {
            //steps {
                //sh 'npm run lint'
            //}
        //}
        stage('Unit Tests') {
            steps {
                sh 'npm run test'
            }
        }
        }
}
