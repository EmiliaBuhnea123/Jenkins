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
                sh 'npx allure generate allure-results --clean -o allure-report'
                sh 'zip -r allure-report.zip allure-report'
            }
        }
    }
    post {
        always {
            allure includeProperties: false,
                   jdk: '',
                   results: [[path: 'allure-results']]
            emailext(
            to: 'ebuhnea@griddynamics.com',
            subject: "Playwright Test Results: ${currentBuild.currentResult}",
            body: """
                The Playwright test have completed with status: ${currentBuild.currentResult}.
                Check Jenkins console for details.
                Project: ${env.JOB_NAME}
                Build Number: ${env.BUILD_NUMBER}
                Build URL: ${env.BUILD_URL}
            """,
            attachmentsPattern: '**/allure-report.zip'
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
