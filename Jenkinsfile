pipeline {
    agent any
    environment {
        PATH = "/usr/local/bin:${env.PATH}"
    }
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
                sh 'npx playwright install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }
    post {
        always {
            mail to: 'ebuhnea@griddynamics.com',
                 subject: "Playwright Test Results: ${currentBuild.currentResult}",
                 body: """
                The Playwright tests have completed with status: ${currentBuild.currentResult}. Please check the Jenkins console output for more details.
                Project: ${env.JOB_NAME}
                Build Number: ${env.BUILD_NUMBER}
                Build URL: ${env.BUILD_URL}
                """
        }
        success {
            echo 'Tests passed successfully!'
        }
        failure {
            echo 'Tests failed!'
        }
    }
}
