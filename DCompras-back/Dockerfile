FROM openjdk:17-jdk-alpine
EXPOSE 8080
VOLUME /tmp
COPY ./target/decompras-0.0.1-SNAPSHOT.jar java-app.jar
ENTRYPOINT ["java", "-jar", "java-app.jar"]