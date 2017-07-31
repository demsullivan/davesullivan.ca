all:
	middleman build
	
deploy:
	aws s3 sync build/ s3://www.davesullivan.ca --acl public-read

staging_deploy:
	aws s3 sync build/ s3://davesullivan.ca --acl public-read