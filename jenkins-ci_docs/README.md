# Jenkins CI docs

> Little how-to configure the Jenkins CI job, to run one node project with [Karma Runner v0.12](https://karma-runner.github.io/0.12/plus/jenkins.html) and load xml report generate by Karma jUnit Report [v0.2.2](https://github.com/karma-runner/karma-junit-reporter/tree/v0.2.2)


## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* jenkins.war - [Jenkins CI](https://jenkins-ci.org/)

  * Must have [Java](https://www.java.com/download/) installed

  * One java web server to deploy and run jenkins.war - I chose the [Apache Tomcat](https://tomcat.apache.org/) to run locally

* Docker

  * Must have [Docker](https://www.docker.com/) installed

    * `docker pull jenkinsci/jenkins`

* Jenkins plugins

  * Must have [Git plugin](https://wiki.jenkins-ci.org/display/JENKINS/Git+Plugin) installed on Jenkins


## Project Karma configs

* [tools/karma-configs/options.js](../tools/karma-configs/options.js) - gerenal Karma configs

* CI flow

  * [CI config](../tools/karma-configs/index.js#L40-L54)

  * [gulp ci task](../tools/gulp/tasks/karma.js#L46-L48)

  * [npm test](../package.json#L14-L15) - execute environment setup and then execute gulp ci flow


## Job Config

* [execute shell steps](execute_shell.md)

* [apache maven steps](maven.md)


## Links

* [Jenkins CI](https://jenkins-ci.org/)

* [Sauce Labs and Jenkins Tutorial | Sauce Labs Docs](https://docs.saucelabs.com/ci-integrations/jenkins/)

---

* [Jenkins: Getting Karma Generated Test Results to Appear in Maven Project Job | My Shitty Code](https://myshittycode.com/2014/11/11/jenkins-getting-karma-generated-test-results-to-appear-in-maven-project-job/) - 2014/11/11

* [Java Code Coverage With Cobertura and Jenkins - Log Analysis | Log Monitoring by Loggly](https://www.loggly.com/blog/java-code-coverage-with-cobertura-and-jenkins/) - 2011/11/29
