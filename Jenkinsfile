node {
    try {
        stage('Checkout') {
            echo 'Checking out code...'
            checkout scm
        }

        stage('Build') {
            echo 'Building...'
            // 예시 빌드 명령어:
            sh 'npm install'
        }

        stage('Test') {
            echo 'Running tests...'
            // 예시 테스트 명령어:
            // sh 'make test'
        }

        stage('Deploy') {
            echo 'Deploying...'
            // 예시 배포 명령어:
            sh 'node app.js'
        }
    } catch (Exception e) {
        echo "Pipeline failed: ${e.getMessage()}"
        currentBuild.result = 'FAILURE'
    } finally {
        echo 'Pipeline finished.'
    }
}
