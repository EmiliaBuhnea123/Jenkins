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
            emailext (
                subject: "Playwright Test Results: ${currentBuild.currentResult} : ${env.JOB_NAME}",
                body: """
                The Playwright tests have completed with status: ${currentBuild.currentResult}. Please check the Jenkins console output for more details.
                Build Number: ${env.BUILD_NUMBER}
                Build URL: ${env.BUILD_URL}
                """,
                to: "critixproject@gmail.com",
                from: "critixproject@gmail.com"
            )   
        }
        success {
            echo 'Tests passed successfully!'
        }
        failure {
            echo 'Tests failed!'
        }
    }
}
