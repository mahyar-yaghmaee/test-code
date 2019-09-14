*Objective:*
- Test your ability to build, test, and deploy a modern node.js based full stack web application.

*Method:*
- Create a build pipeline using any cloud based CI/CD tool of your choice (CircleCI, TravisCI, GitlabCI, etc)
- Create a version of this application in this pipeline.
- Run the unit tests of this application in this pipeline.
- Deploy the most recent version of this application to an Amazon EC2 instance in this pipeline.

*Details:*
- Use your own EC2 instance to test your deployments, but leave us some way to use ours when we test it.
- This could be adding a private key to the deployment pipeline to SSH into the target EC2 instance, or some other method.
- It doesn't really matter how you set up this EC2 instance, we'll assume it's already set up and running.
- We just want to test the deployments to it.
- No modifications to the service are required, but you are welcome to do them if you want.
