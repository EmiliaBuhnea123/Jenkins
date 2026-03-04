pipeline {
    agent any
    environment {
        PATH = "/usr/local/bin:${env.PATH}"
        EMAIL = credentials('email_notification')
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
                sh 'npx allure generate allure-results --clean -o allure-report'
                sh 'zip -r allure-report.zip allure-report'
                sh 'cp allure-report.zip allure-report-for-email.zip'
            }
        }
    }
     post {
        always {
            allure includeProperties: false,
                   jdk: '',
                   results: [[path: 'allure-results']]
            script {       
                emailext(
                    to: "${env.EMAIL}",
                    subject: "Playwright Test Results: ${currentBuild.currentResult}",
                    body: """
                        The Playwright tests have completed with status: ${currentBuild.currentResult}.
                        Check Jenkins console for details.
                        Project: ${env.JOB_NAME}
                        Build Number: ${env.BUILD_NUMBER}
                        Build URL: ${env.BUILD_URL}
                    """,
                    attachmentsPattern: 'allure-report-for-email.zip'
                )
            }
        }
        success {
            echo 'Tests passed successfully!'
        }
        failure {
            echo 'Tests failed!'
        }
    }
}
