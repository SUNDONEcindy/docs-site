(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{617:function(t,a,s){"use strict";s.r(a);var e=s(18),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"onboarding-a-micronaut-based-rest-api-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#onboarding-a-micronaut-based-rest-api-service"}},[t._v("#")]),t._v(" Onboarding a Micronaut based REST API service")]),t._v(" "),s("p",[t._v("As an API developer, you can onboard a REST service to the Zowe API Mediation Layer using the Micronaut framework. While using the Spring framework to develop a JVM-based service to register to the API ML is the recommended method, you can use the procedure described in this article to onboard a service using the Micronaut framework.")]),t._v(" "),s("p",[s("strong",[t._v("Note:")]),t._v(" For more information about onboarding API services with the API ML, see the "),s("RouterLink",{attrs:{to:"/extend/extend-apiml/onboard-overview.html"}},[t._v("Onboarding Overview")]),t._v(".")],1),t._v(" "),s("p",[t._v("For Micronaut-related documentation, see the "),s("a",{attrs:{href:"https://docs.micronaut.io/latest/guide/index.html#introduction",target:"_blank",rel:"noopener noreferrer"}},[t._v("Micronaut website"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#set-up-your-build-automation-system"}},[t._v("Set up your build automation system")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#specify-the-main-class"}},[t._v("Specify the main class")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#define-the-output-jar-file"}},[t._v("Define the output jar file")])]),t._v(" "),s("li",[t._v("(Optional) "),s("a",{attrs:{href:"#create-a-shadow-jar"}},[t._v("Create a shadow jar")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#start-the-application"}},[t._v("Start the application")])])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#configure-the-micronaut-application"}},[t._v("Configure the Micronaut application")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#add-api-ml-configuration"}},[t._v("Add API ML configuration")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#add-micronaut-configuration"}},[t._v("Add Micronaut configuration")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#set-up-logging-configuration"}},[t._v("Set up logging configuration")])])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#validate-successful-registration"}},[t._v("Validate successful registration")])])]),t._v(" "),s("h2",{attrs:{id:"set-up-your-build-automation-system"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-up-your-build-automation-system"}},[t._v("#")]),t._v(" Set up your build automation system")]),t._v(" "),s("p",[t._v("Currently, the only build automation system for use with onboarding a Micronaut based service is "),s("em",[t._v("Gradle")]),t._v(".")]),t._v(" "),s("p",[s("strong",[t._v("Follow these steps:")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Create a "),s("code",[t._v("gradle.properties")]),t._v(" file in the root of your project if one does not already exist.")])]),t._v(" "),s("li",[s("p",[t._v("In the "),s("code",[t._v("gradle.properties")]),t._v(" file, set the URL of the specific Artifactory containing the "),s("em",[t._v("SpringEnabler")]),t._v(" artifact.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# Repository URL for getting the enabler-java artifact\nartifactoryMavenRepo=https://zowe.jfrog.io/zowe/libs-release/\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Add the following "),s("em",[t._v("Gradle")]),t._v(" code block to the "),s("code",[t._v("repositories")]),t._v(" section of your "),s("code",[t._v("build.gradle")]),t._v(" file:")]),t._v(" "),s("div",{staticClass:"language-gradle extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("repositories {\n    ...\n\n    maven {\n        url artifactoryMavenRepo\n    }\n}\n")])])])]),t._v(" "),s("li",[s("p",[t._v("In the "),s("code",[t._v("build.gradle")]),t._v(" file, add the micronaut enabler as a dependency:")]),t._v(" "),s("div",{staticClass:"language-groovy extra-class"},[s("pre",{pre:!0,attrs:{class:"language-groovy"}},[s("code",[t._v("implementation "),s("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"org.zowe.apiml.sdk:onboarding-enabler-micronaut:'),s("span",{pre:!0,attrs:{class:"token expression"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),t._v("zoweApimlVersion")]),t._v('"')]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("(Optional) Add a shadow plug-in to create a runnable jar file. Update the "),s("code",[t._v("gradle.build file")]),t._v(" with a plugin:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("id 'com.github.johnrengelman.shadow' version '6.1.0'\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Specify the main class with the following script:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mainClassName = '${your.packa.name.MainClassName}' #replace with your main class\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Define the output jar file.")]),t._v(" "),s("p",[t._v("Add the following script to define the output of the jar file:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("shadowJar {\n        archiveBaseName.set('micronaut-enabler')\n        archiveClassifier.set('')\n        archiveVersion.set('1.0')\n    }\n")])])]),s("p",[t._v("The following example shows a sample "),s("code",[t._v("gradle.build")]),t._v(" file:")]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v(" plugins {\n     id \"io.micronaut.application\" version '1.0.5'\n     id 'com.github.johnrengelman.shadow' version '6.1.0'\n }\n mainClassName = 'org.zowe.apiml.Application'\n\n shadowJar {\n     archiveBaseName.set('micronaut-enabler')\n     archiveClassifier.set('')\n     archiveVersion.set('1.0')\n }\n version \"0.1\"\n group \"org.zowe.apiml\"\n\n repositories {\n     url artifactoryMavenRepo\n }\n\n micronaut {\n     version = \"2.1.3\"\n     runtime \"netty\"\n     testRuntime \"junit5\"\n     processing {\n         incremental true\n         annotations \"org.zowe.apiml.*\"\n     }\n }\n\n dependencies {\n     implementation \"org.zowe.apiml. sdk:onboarding-enabler-micronaut:$zoweApimlVersion\"\n }\n\n java {\n     sourceCompatibility = JavaVersion.toVersion('1.8')\n     targetCompatibility = JavaVersion.toVersion('1.8')\n }\n")])])])]),t._v(" "),s("li",[s("p",[t._v("(Optional) Create a shadow jar.")]),t._v(" "),s("p",[t._v("To create a shadow jar, execute the gradle "),s("code",[t._v("shadowJar")]),t._v(" task. For this sample, the plugin produces the jar "),s("code",[t._v("micronaut-enabler-1.0.jar")]),t._v(" in "),s("code",[t._v("build/libs")]),t._v(" directory.")]),t._v(" "),s("p",[t._v("You can now run your application with the command "),s("code",[t._v("java -jar micronaut-enabler-1.0.jar")]),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("Start the application.")]),t._v(" "),s("p",[t._v("From the root directory of your project, start the application with the "),s("strong",[s("code",[t._v("gradle run")])]),t._v(" command.")])])]),t._v(" "),s("h2",{attrs:{id:"configure-the-micronaut-application"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-micronaut-application"}},[t._v("#")]),t._v(" Configure the Micronaut application")]),t._v(" "),s("p",[t._v("Use a yaml file to configure your Micronaut application.\nCreate the following two sections in your yaml file:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("apiml")]),t._v(" for API ML configuration")]),t._v(" "),s("li",[s("code",[t._v("micronaut")]),t._v(" for micronaut configuration")])]),t._v(" "),s("h3",{attrs:{id:"add-api-ml-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-api-ml-configuration"}},[t._v("#")]),t._v(" Add API ML configuration")]),t._v(" "),s("p",[t._v("Use the following procedure to add API ML configuration to the application.yaml.")]),t._v(" "),s("p",[s("strong",[t._v("Follow these steps:")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Add the following configuration to the "),s("code",[t._v("apiml")]),t._v(" section in the yaml file:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiml")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("service")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("serviceId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fill.your.serviceId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The symbolic name of the service")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#rest of the configuration")]),t._v("\n")])])]),s("p",[t._v("where:")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[s("code",[t._v("fill.your.service")])])]),t._v(" "),s("p",[t._v("specifies the ID of your service")])])])]),t._v(" "),s("li",[s("p",[t._v("Add SSL-resolving properties as shown in the following example. Ensure that you structure the nested objects within "),s("code",[t._v("apiml.service")]),t._v(" as arrays. Be sure to include "),s("code",[t._v("-")]),t._v(" (hyphen) before "),s("code",[t._v("enabled")]),t._v(" thereby indicating the first element of the array.")])])]),t._v(" "),s("p",[s("strong",[t._v("Example:")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiml")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("service")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ssl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("verifySslCertificatesOfServices")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("protocol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TLSv1.2\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled-protocols")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TLSv1.2\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("keyStoreType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fill.your.keystoretype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("trustStoreType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fill.your.truststoretype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("keyAlias")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fill.your.keyAlias"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("keyPassword")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fill.your.keyPassword"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("keyStore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fill.your..keyStore"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("keyStorePassword")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fill.your.keyStorePassword"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("trustStore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fill.your.trustStore"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("trustStorePassword")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fill.your.trustStorePassword"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ciphers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("fill.your.ciphers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[s("strong",[t._v("Note:")]),t._v(" For a sample of this configuration, see "),s("RouterLink",{attrs:{to:"/extend/extend-apiml/onboard-spring-boot-enabler.html#api-ml-onboarding-configuration-sample"}},[t._v("API ML Onboarding Configuration Sample")]),t._v(".")],1),t._v(" "),s("p",[t._v("The yaml now contains configuration to register to the API Mediation Layer.")]),t._v(" "),s("h3",{attrs:{id:"add-micronaut-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-micronaut-configuration"}},[t._v("#")]),t._v(" Add Micronaut configuration")]),t._v(" "),s("p",[t._v("Once you complete API ML configuration, add configuration to provide correct mapping between API ML and micronaut parameters.")]),t._v(" "),s("p",[s("strong",[t._v("Follow these steps:")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Add the following yaml snippet with the micronaut configuration parameters:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("micronaut")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("application")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("apiml.service.serviceId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("apiml.service.port"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("context-path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("apiml.service.serviceId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ssl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key-store")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("apiml.service.ssl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".keyPassword"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("apiml.service.ssl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".keyStoreType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("apiml.service.ssl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".keyStore"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("alias")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("apiml.service.ssl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".keyAlias"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("apiml.service.ssl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".keyPassword"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("trust-store")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("apiml.service.ssl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".trustStorePassword"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("apiml.service.ssl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".trustStore"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("apiml.service.ssl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".trustStoreType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("apiml.service.port"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ciphers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("apiml.service.ssl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".ciphers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("protocol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("apiml.service.ssl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".protocol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("where:")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[s("code",[t._v("apiml.service.serviceId")])])]),t._v(" "),s("p",[t._v("specifies the ID of your service")])]),t._v(" "),s("li",[s("p",[s("strong",[s("code",[t._v("apiml.service.port")])])]),t._v(" "),s("p",[t._v("specifies the port on which the service listens")])]),t._v(" "),s("li",[s("p",[s("strong",[s("code",[t._v("apiml.service.ssl[0].keyPassword")])])]),t._v(" "),s("p",[t._v("specifies the password that protects the key in keystore")])]),t._v(" "),s("li",[s("p",[s("strong",[s("code",[t._v("apiml.service.ssl[0].keyStoreType")])])]),t._v(" "),s("p",[t._v("specifies the type of the keystore, (Example: PKCS12)")])]),t._v(" "),s("li",[s("p",[s("strong",[s("code",[t._v("apiml.service.ssl[0].keyStore")])])]),t._v(" "),s("p",[t._v("specifies the location of the keystore")])]),t._v(" "),s("li",[s("p",[s("strong",[s("code",[t._v("apiml.service.ssl[0].keyAlias")])])]),t._v(" "),s("p",[t._v("specifies the alias under which the key is stored in the keystore")])]),t._v(" "),s("li",[s("p",[s("strong",[s("code",[t._v("apiml.service.ssl[0].trustStorePassword")])])]),t._v(" "),s("p",[t._v("specifies the password that protects the certificates in the truststore")])]),t._v(" "),s("li",[s("p",[s("strong",[s("code",[t._v("apiml.service.ssl[0].trustStore")])])]),t._v(" "),s("p",[t._v("specifies the location of the truststore")])]),t._v(" "),s("li",[s("p",[s("strong",[s("code",[t._v("apiml.service.ssl[0].trustStoreType")])])]),t._v(" "),s("p",[t._v("specifies the type of the truststore, (Example: PKCS12)")])]),t._v(" "),s("li",[s("p",[s("strong",[s("code",[t._v("apiml.service.ssl[0].ciphers")])])]),t._v(" "),s("p",[t._v("specifies the list of ciphers that user wants to enable for TLS communication")])]),t._v(" "),s("li",[s("p",[s("strong",[s("code",[t._v("apiml.service.ssl[0].protocol")])])]),t._v(" "),s("p",[t._v("specifies the type of SSL/TLS protocol (Example: TLSv1.2)")])])])])]),t._v(" "),s("h3",{attrs:{id:"optional-set-up-logging-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#optional-set-up-logging-configuration"}},[t._v("#")]),t._v(" (Optional) Set up logging configuration")]),t._v(" "),s("p",[t._v("Set up custom logging configuration to have more structured output and better control of logs.")]),t._v(" "),s("p",[t._v("Create a "),s("code",[t._v("logback.xml")]),t._v(" file in the "),s("code",[t._v("resources")]),t._v(" folder and include the "),s("code",[t._v("application.yml")]),t._v(". Update the "),s("code",[t._v("logback.xml")]),t._v(" file with the following configuration:")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("configuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("resource")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("application.yml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("turboFilter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ch.qos.logback.classic.turbo.DuplicateMessageFilter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("AllowedRepetitions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("AllowedRepetitions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("turboFilter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("conversionRule")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("conversionWord")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("clr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("converterClass")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("org.springframework.boot.logging.logback.ColorConverter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("appender")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("STDOUT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ch.qos.logback.core.ConsoleAppender"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("encoder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("pattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("%cyan(%d{yyyy-MM-dd HH:mm:ss.SSS,UTC}) %gray("),s("span",{pre:!0,attrs:{class:"token entity named-entity",title:"<"}},[t._v("&lt;")]),t._v("${logbackService:-${logbackServiceName}}:%thread:${PID:- }"),s("span",{pre:!0,attrs:{class:"token entity named-entity",title:">"}},[t._v("&gt;")]),t._v("){magenta} %X{userid:-} %highlight(%-5level) %magenta(\\(%logger{15}\\)){cyan} %msg%n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("pattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("encoder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("appender")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("root")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("level")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("appender-ref")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ref")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("STDOUT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("root")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("configuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"validate-successful-registration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validate-successful-registration"}},[t._v("#")]),t._v(" Validate successful registration")]),t._v(" "),s("p",[t._v("After you complete the configuration, ensure that your application is visible within Zowe API ML. For more information, see the article "),s("RouterLink",{attrs:{to:"/extend/extend-apiml/onboard-spring-boot-enabler.html#validating-the-discoverability-of-your-api-service-by-the-discovery-service"}},[t._v("validating the discoverability of your API service by teh Discovery Service")]),t._v(", which describes the validation procedure common for all enablers.")],1)])}),[],!1,null,null,null);a.default=n.exports}}]);