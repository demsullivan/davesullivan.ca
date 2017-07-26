deploy:
	aws s3 sync build/ s3://www.davesullivan.ca --acl public-read
