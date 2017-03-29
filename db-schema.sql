DROP DATATBASE IF EXISTS tweets
CREATE DATABASE tweets
\c TWEETS

DROP TABLE IF EXISTS tweet;
CREATE TABLE tweet
  (
    tweetid SERIAL PRIMARY KEY,
    tweetext VARCHAR(1720)
  );

INSERT INTO tweet(tweetext)
VALUES('i am so into eating cake and ice cream')
