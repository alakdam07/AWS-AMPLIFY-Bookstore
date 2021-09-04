## Project target to learn Amplify framework


### Install AWS-Amplify cli Globally

```
sudo npm i -g  @aws-amplify/cli

```

### Before start a project Have to configure Amplify AWS configure.  It will create a IAM user and you can choose region as well.


```
amplify configure
```

## `PS: For this project I used Ireland and region is eu-west-1`


## To check the AWS configure

```bash
cat  ~/.aws/credentials

or

open ~/.aws/credentials
```

### To check AWS profile

```bash
open ~/.aws/credentials

or

open ~/.aws/config
```
### In root project, initialize the Amplify.


```

 amplify init


```

### Create auth for the project

```

 amplify add auth


```

### Create S3 bucket to stroe the book image for the project


```

 amplify add storage


```

### Create two Lambda fucntions for create order and processPayment for the project


```

 amplify add function


```

### Create GraphqlApi for the project


```

 amplify add api

```

### After all requirement fullfill, we will push to the AWS

```

 amplify push

```

After the above command it will look like this


<table>
  <tr align= "center">
    <td valign="top" width= "500"><img src="https://res.cloudinary.com/drewzxzgc/image/upload/v1630736349/vpmhavugeooehnmnxmgu.png"/></td>
  </tr>
</table>

**This is End Cloud resource for this project**
```
GraphQL endpoint: https://rbaolyh7f5bt7c672fvezivcra.appsync-api.eu-west-1.amazonaws.com/graphql

GraphQL API KEY: da2-hozhbfpkijazljdysy7y6as5ai
```

**To see current project's DynamoDB Table, lambda functions, congnito or other stuff. Below this command**

```
amplify console

```

## How to create Admin from Cognito Pool?
**In this chapter, We will learn how to create a `admin` user. User can open an accout to the book store app. Also user without signUp can see the books. We made authetication that only Admin user can create a books.  In order to create an Admin. Go to Cognito Pool> click `Users and groups` > choose `Groups`> create a Group(Give name `Admin`) >  Give the name and description of the groups. Important Note! the lesser the `Precedence` the more the strong the admin, So keep it `Precedence: 0`. Now select the `Username` who created the account and add them in `Admin` group which you created.**


##  S3 bucket policy where give permission to see the books images to the Guest Users.


[Bucket-policies-link](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html)

**Choose `Granting read-only permission to an anonymous user`  and copy the policy. Paste it to the S3 bucket's Permission policies**

```
{
  "Version":"2012-10-17",
  "Statement":[
    {
      "Sid":"PublicRead",
      "Effect":"Allow",
      "Principal": "*",
      "Action":["s3:GetObject","s3:GetObjectVersion"],
      "Resource":["arn:aws:s3:::alakbookstoreimage82125-prod/public/images/*"]
    }
  ]
}
```
