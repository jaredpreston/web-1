(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{158:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return i})),t.d(e,"metadata",(function(){return s})),t.d(e,"rightToc",(function(){return l})),t.d(e,"default",(function(){return _}));var o=t(1),a=t(9),r=(t(0),t(215)),i={id:"configuration",title:"Configuration"},s={id:"reference/configuration",title:"Configuration",description:"\x3c!-- THIS FILE IS BEING AUTO-GENERATED. DO NOT MODIFY IT AS ALL CHANGES WILL BE OVERWRITTEN.",source:"@site/docs/reference/configuration.md",permalink:"/kratos/docs/next/reference/configuration",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/reference/configuration.md",version:"next",lastUpdatedBy:"hackerman",lastUpdatedAt:1586984182,sidebar:"docs",previous:{title:"Zero Trust with IAP Proxy",permalink:"/kratos/docs/next/guides/zero-trust-iap-proxy-identity-access-proxy"},next:{title:"JSON Schema and JSON Paths",permalink:"/kratos/docs/next/reference/json-schema-json-paths"}},l=[],u={rightToc:l};function _(n){var e=n.components,t=Object(a.a)(n,["components"]);return Object(r.b)("wrapper",Object(o.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"If file ",Object(r.b)("inlineCode",{parentName:"p"},"$HOME/.kratos.yaml")," exists, it will be used as a configuration file\nwhich supports all configuration settings listed below."),Object(r.b)("p",null,"You can load the config file from another source using the\n",Object(r.b)("inlineCode",{parentName:"p"},"-c path/to/config.yaml")," or ",Object(r.b)("inlineCode",{parentName:"p"},"--config path/to/config.yaml")," flag:\n",Object(r.b)("inlineCode",{parentName:"p"},"kratos --config path/to/config.yaml"),"."),Object(r.b)("p",null,"Config files can be formatted as JSON, YAML and TOML. Some configuration values\nsupport reloading without server restart. All configuration values can be set\nusing environment variables, as documented below."),Object(r.b)("p",null,"To find out more about edge cases like setting string array values through\nenvironmental variables head to the\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.ory.sh/docs/ecosystem/configuring"}),"Configuring ORY services"),"\nsection."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),'## ORY Kratos Configuration\n#\n\n## Data Source Name ##\n#\n# DSN is used to specify the database credentials as a connection URI.\n#\n# Examples:\n# - "postgres://user:\n#   password@postgresd:5432/database?sslmode=disable&max_conns=20&max_idle_conns=\\\n#   4"\n# - mysql://user:secret@tcp(mysqld:3306)/database?max_conns=20&max_idle_conns=4\n# - cockroach://user@cockroachdb:26257/database?sslmode=disable&max_conns=20&max_idle_conns=4\n# - sqlite:///var/lib/sqlite/db.sqlite?_fk=true&mode=rwc\n#\n# Set this value using environment variables on\n# - Linux/macOS:\n#    $ export DSN=<value>\n# - Windows Command Line (CMD):\n#    > set DSN=<value>\n#\ndsn: mysql://user:secret@tcp(mysqld:3306)/database?max_conns=20&max_idle_conns=4\n\n## identity ##\n#\nidentity:\n  ## traits ##\n  #\n  traits:\n    ## default_schema_url ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export IDENTITY_TRAITS_DEFAULT_SCHEMA_URL=<value>\n    # - Windows Command Line (CMD):\n    #    > set IDENTITY_TRAITS_DEFAULT_SCHEMA_URL=<value>\n    #\n    default_schema_url: http://vTmm.wol0XtyZPp2zvZdflJZItH+8mVM31ggh\n\n    ## schemas ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export IDENTITY_TRAITS_SCHEMAS=<value>\n    # - Windows Command Line (CMD):\n    #    > set IDENTITY_TRAITS_SCHEMAS=<value>\n    #\n    schemas:\n      - non dolor\n      - false\n\n## selfservice ##\n#\nselfservice:\n  ## logout ##\n  #\n  logout:\n    ## redirect_to ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_LOGOUT_REDIRECT_TO=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_LOGOUT_REDIRECT_TO=<value>\n    #\n    redirect_to: http://rBaRYM.swzosb\n\n  ## strategies ##\n  #\n  strategies:\n    ## password ##\n    #\n    password:\n      ## enabled ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_STRATEGIES_PASSWORD_ENABLED=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_STRATEGIES_PASSWORD_ENABLED=<value>\n      #\n      enabled: false\n\n    ## oidc ##\n    #\n    oidc:\n      ## enabled ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_STRATEGIES_OIDC_ENABLED=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_STRATEGIES_OIDC_ENABLED=<value>\n      #\n      enabled: true\n\n      ## config ##\n      #\n      config:\n        ## providers ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_STRATEGIES_OIDC_CONFIG_PROVIDERS=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_STRATEGIES_OIDC_CONFIG_PROVIDERS=<value>\n        #\n        providers:\n          - id: Excepteur elit\n            provider: google\n            client_id: pariatur esse ad aute in\n            client_secret: ex Lorem laboris nulla\n            schema_url: http://MKSeuPFeoSDfjvAntbEtlXVqq.prcKLnN9gSNe0RYZykwCv1evV6f3,JFwO.\n            issuer_url: https://EZxlEKewlKaENewEFqbRuIaHnXW.sdwwYuVz6LA4oTaIJWtJ7\n            auth_url: http://qOzJWWvZxCGEmBdbSUreDitdByQa.bwgx1PZAcxcvne0nUI5sCxKAmGiunS.vbLqPxgpIIt+P\n            token_url: https://jeCAOzIASV.xthBWDmn2VAJmmltq3Xcjh,tJ7WFCnaQ0+pd0b-tZl83GurfWbwBLq\n            scope:\n              - aute minim amet\n              - voluptate Ut minim in nisi\n          - id: fugiat eu qui\n            provider: generic\n            client_id: anim cillum Ut\n            client_secret: elit proident laborum exercitation\n            schema_url: https://xtOgoBacvqZWwugx.smRczJF5z,2xhsWZO2LwKB-+btmTmb,Z8mLk+brrox9XfeZWo-2WIGF\n            issuer_url: https://hBsqRC.gawSk+ubauULiGbSSKuqimUouRWxP6feW.ywiCyKCKpDAy3\n            auth_url: http://hleVdHmjCVKRdOiz.dknYYF9+wNFxK9T09vgvUNe-\n            token_url: http://xpOwLmfqoqtJAVQxFVCXmlsW.rwNvXITVU,r9RlbUuqRPYqvm5sEfm8hdZ4xKLybr2BoQnYu\n            scope:\n              - cillum sit\n              - elit do nisi\n              - magna enim sunt sint\n              - Duis sunt sed ullamco exercitation\n\n  ## settings ##\n  #\n  settings:\n    ## request_lifespan ##\n    #\n    # Default value: 1h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_SETTINGS_REQUEST_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_SETTINGS_REQUEST_LIFESPAN=<value>\n    #\n    request_lifespan: 188144429m\n\n    ## privileged_session_max_age ##\n    #\n    # Default value: 1h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_SETTINGS_PRIVILEGED_SESSION_MAX_AGE=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_SETTINGS_PRIVILEGED_SESSION_MAX_AGE=<value>\n    #\n    privileged_session_max_age: 8276ns\n\n    ## after ##\n    #\n    after:\n      ## Default Return To URL ##\n      #\n      # ORY Kratos redirects to this URL per default on completion of self-service flows and other browser interaction. This value may be overridden by a `default_return_to` in a lower configuration level (`foo.bar.default_return_to` overrides `foo.default_return_to` overrides `default_return_to`) and by the `?return_to` query in certain cases.\n      #\n      # Examples:\n      # - https://my-app.com/dashboard\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_SETTINGS_AFTER_DEFAULT_RETURN_TO=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_SETTINGS_AFTER_DEFAULT_RETURN_TO=<value>\n      #\n      default_return_to: https://my-app.com/dashboard\n\n      ## password ##\n      #\n      password:\n        ## Default Return To URL ##\n        #\n        # ORY Kratos redirects to this URL per default on completion of self-service flows and other browser interaction. This value may be overridden by a `default_return_to` in a lower configuration level (`foo.bar.default_return_to` overrides `foo.default_return_to` overrides `default_return_to`) and by the `?return_to` query in certain cases.\n        #\n        # Examples:\n        # - https://my-app.com/dashboard\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_SETTINGS_AFTER_PASSWORD_DEFAULT_RETURN_TO=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_SETTINGS_AFTER_PASSWORD_DEFAULT_RETURN_TO=<value>\n        #\n        default_return_to: https://my-app.com/dashboard\n\n        ## hooks ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_SETTINGS_AFTER_PASSWORD_HOOKS=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_SETTINGS_AFTER_PASSWORD_HOOKS=<value>\n        #\n        hooks:\n          - hook: verify\n\n      ## profile ##\n      #\n      profile:\n        ## Default Return To URL ##\n        #\n        # ORY Kratos redirects to this URL per default on completion of self-service flows and other browser interaction. This value may be overridden by a `default_return_to` in a lower configuration level (`foo.bar.default_return_to` overrides `foo.default_return_to` overrides `default_return_to`) and by the `?return_to` query in certain cases.\n        #\n        # Examples:\n        # - https://my-app.com/dashboard\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_SETTINGS_AFTER_PROFILE_DEFAULT_RETURN_TO=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_SETTINGS_AFTER_PROFILE_DEFAULT_RETURN_TO=<value>\n        #\n        default_return_to: https://my-app.com/dashboard\n\n        ## hooks ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_SETTINGS_AFTER_PROFILE_HOOKS=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_SETTINGS_AFTER_PROFILE_HOOKS=<value>\n        #\n        hooks:\n          - hook: verify\n\n  ## verify ##\n  #\n  verify:\n    ## Self-Service Verification Request Lifespan ##\n    #\n    # Sets how long the verification request (for the UI interaction) is valid.\n    #\n    # Default value: 1h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_VERIFY_REQUEST_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_VERIFY_REQUEST_LIFESPAN=<value>\n    #\n    request_lifespan: 396536s\n\n    ## Self-Service Verification Link Lifespan ##\n    #\n    # Sets how long the verification link (e.g. the one sent via email) is valid for.\n    #\n    # Default value: 24h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_VERIFY_LINK_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_VERIFY_LINK_LIFESPAN=<value>\n    #\n    link_lifespan: 7684us\n\n  ## login ##\n  #\n  login:\n    ## request_lifespan ##\n    #\n    # Default value: 1h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_LOGIN_REQUEST_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_LOGIN_REQUEST_LIFESPAN=<value>\n    #\n    request_lifespan: 56823585180us\n\n    ## before ##\n    #\n    before:\n      ## hooks ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_LOGIN_BEFORE_HOOKS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_LOGIN_BEFORE_HOOKS=<value>\n      #\n      hooks:\n        - hook: redirect\n          config:\n            default_redirect_url: https://LWJQshXWBqsNRsqcSWeJHFIzepFtuGC.dmxirjBGVEadQ+v.MZLbqJIp.Pp\n            allow_user_defined_redirect: true\n        - hook: redirect\n          config:\n            default_redirect_url: http://HfjzCPLYcH.dryaOXtNKbvhnqCWaIMPE5gxSKbqy,GlM,CHpxuG6qb\n            allow_user_defined_redirect: true\n        - hook: redirect\n          config:\n            default_redirect_url: https://oIYrrXQZbVxLzsmoLpTGcEAsrrTMqM.bgrwGAbbCIkj9Rx,eaf\n            allow_user_defined_redirect: false\n\n    ## after ##\n    #\n    after:\n      ## Default Return To URL ##\n      #\n      # ORY Kratos redirects to this URL per default on completion of self-service flows and other browser interaction. This value may be overridden by a `default_return_to` in a lower configuration level (`foo.bar.default_return_to` overrides `foo.default_return_to` overrides `default_return_to`) and by the `?return_to` query in certain cases.\n      #\n      # Examples:\n      # - https://my-app.com/dashboard\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_LOGIN_AFTER_DEFAULT_RETURN_TO=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_LOGIN_AFTER_DEFAULT_RETURN_TO=<value>\n      #\n      default_return_to: https://my-app.com/dashboard\n\n      ## password ##\n      #\n      password:\n        ## Default Return To URL ##\n        #\n        # ORY Kratos redirects to this URL per default on completion of self-service flows and other browser interaction. This value may be overridden by a `default_return_to` in a lower configuration level (`foo.bar.default_return_to` overrides `foo.default_return_to` overrides `default_return_to`) and by the `?return_to` query in certain cases.\n        #\n        # Examples:\n        # - https://my-app.com/dashboard\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_LOGIN_AFTER_PASSWORD_DEFAULT_RETURN_TO=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_LOGIN_AFTER_PASSWORD_DEFAULT_RETURN_TO=<value>\n        #\n        default_return_to: https://my-app.com/dashboard\n\n        ## hooks ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_LOGIN_AFTER_PASSWORD_HOOKS=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_LOGIN_AFTER_PASSWORD_HOOKS=<value>\n        #\n        hooks:\n          - hook: revoke_active_sessions\n\n      ## oidc ##\n      #\n      oidc:\n        ## Default Return To URL ##\n        #\n        # ORY Kratos redirects to this URL per default on completion of self-service flows and other browser interaction. This value may be overridden by a `default_return_to` in a lower configuration level (`foo.bar.default_return_to` overrides `foo.default_return_to` overrides `default_return_to`) and by the `?return_to` query in certain cases.\n        #\n        # Examples:\n        # - https://my-app.com/dashboard\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_LOGIN_AFTER_OIDC_DEFAULT_RETURN_TO=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_LOGIN_AFTER_OIDC_DEFAULT_RETURN_TO=<value>\n        #\n        default_return_to: https://my-app.com/dashboard\n\n        ## hooks ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_LOGIN_AFTER_OIDC_HOOKS=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_LOGIN_AFTER_OIDC_HOOKS=<value>\n        #\n        hooks:\n          - hook: revoke_active_sessions\n\n  ## registration ##\n  #\n  registration:\n    ## request_lifespan ##\n    #\n    # Default value: 1h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_REGISTRATION_REQUEST_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_REGISTRATION_REQUEST_LIFESPAN=<value>\n    #\n    request_lifespan: 2769ns\n\n    ## before ##\n    #\n    before:\n      ## hooks ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_REGISTRATION_BEFORE_HOOKS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_REGISTRATION_BEFORE_HOOKS=<value>\n      #\n      hooks:\n        - hook: redirect\n          config:\n            default_redirect_url: http://YoXNziMNcacHeoeebXXibkAuqWRjJivMy.fysBj+Ms11HjmfulZC,6ek\n            allow_user_defined_redirect: false\n\n    ## after ##\n    #\n    after:\n      ## Default Return To URL ##\n      #\n      # ORY Kratos redirects to this URL per default on completion of self-service flows and other browser interaction. This value may be overridden by a `default_return_to` in a lower configuration level (`foo.bar.default_return_to` overrides `foo.default_return_to` overrides `default_return_to`) and by the `?return_to` query in certain cases.\n      #\n      # Examples:\n      # - https://my-app.com/dashboard\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_REGISTRATION_AFTER_DEFAULT_RETURN_TO=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_REGISTRATION_AFTER_DEFAULT_RETURN_TO=<value>\n      #\n      default_return_to: https://my-app.com/dashboard\n\n      ## password ##\n      #\n      password:\n        ## Default Return To URL ##\n        #\n        # ORY Kratos redirects to this URL per default on completion of self-service flows and other browser interaction. This value may be overridden by a `default_return_to` in a lower configuration level (`foo.bar.default_return_to` overrides `foo.default_return_to` overrides `default_return_to`) and by the `?return_to` query in certain cases.\n        #\n        # Examples:\n        # - https://my-app.com/dashboard\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_REGISTRATION_AFTER_PASSWORD_DEFAULT_RETURN_TO=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_REGISTRATION_AFTER_PASSWORD_DEFAULT_RETURN_TO=<value>\n        #\n        default_return_to: https://my-app.com/dashboard\n\n        ## hooks ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_REGISTRATION_AFTER_PASSWORD_HOOKS=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_REGISTRATION_AFTER_PASSWORD_HOOKS=<value>\n        #\n        hooks:\n          - hook: verify\n          - hook: session\n          - hook: redirect\n            config:\n              default_redirect_url: http://zD.adifqmOrq6zJKUsfBor57TJhFYjMJ9C+gfWcNxCw-VE1wg9tq\n              allow_user_defined_redirect: false\n          - hook: redirect\n            config:\n              default_redirect_url: http://DSvDuIeszSwRo.xaihxugRrspVS1MJoZW\n              allow_user_defined_redirect: false\n          - hook: redirect\n            config:\n              default_redirect_url: https://TrDvKqXnyLCYGcaUppw.gvi6-cZwlXq4kDUeroQaCiMkn\n              allow_user_defined_redirect: false\n\n      ## oidc ##\n      #\n      oidc:\n        ## Default Return To URL ##\n        #\n        # ORY Kratos redirects to this URL per default on completion of self-service flows and other browser interaction. This value may be overridden by a `default_return_to` in a lower configuration level (`foo.bar.default_return_to` overrides `foo.default_return_to` overrides `default_return_to`) and by the `?return_to` query in certain cases.\n        #\n        # Examples:\n        # - https://my-app.com/dashboard\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_REGISTRATION_AFTER_OIDC_DEFAULT_RETURN_TO=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_REGISTRATION_AFTER_OIDC_DEFAULT_RETURN_TO=<value>\n        #\n        default_return_to: https://my-app.com/dashboard\n\n        ## hooks ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_REGISTRATION_AFTER_OIDC_HOOKS=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_REGISTRATION_AFTER_OIDC_HOOKS=<value>\n        #\n        hooks:\n          - hook: verify\n          - hook: session\n\n## Courier configuration ##\n#\n# The courier is responsible for sending and delivering messages over email, sms, and other means.\n#\ncourier:\n  ## SMTP Configuration ##\n  #\n  # Configures outgoing emails using the SMTP protocol.\n  #\n  smtp:\n    ## SMTP connection string ##\n    #\n    # This URI will be used to connect to the SMTP server. Use the query parameter to allow (`?skip_ssl_verify=true`) or disallow (`?skip_ssl_verify=false`) self-signed TLS certificates. Please keep in mind that any host other than localhost / 127.0.0.1 must use smtp over TLS (smtps) or the connection will not be possible.\n    #\n    # Examples:\n    # - smtps://foo:bar@my-mailserver:1234/?skip_ssl_verify=false\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export COURIER_SMTP_CONNECTION_URI=<value>\n    # - Windows Command Line (CMD):\n    #    > set COURIER_SMTP_CONNECTION_URI=<value>\n    #\n    connection_uri: smtps://foo:bar@my-mailserver:1234/?skip_ssl_verify=false\n\n    ## SMTP Sender Address ##\n    #\n    # The recipient of an email will see this as the sender address.\n    #\n    # Default value: no-reply@ory.kratos.sh\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export COURIER_SMTP_FROM_ADDRESS=<value>\n    # - Windows Command Line (CMD):\n    #    > set COURIER_SMTP_FROM_ADDRESS=<value>\n    #\n    from_address: CkikzOJVHjOpEvi@zigoxWMlKBnPIGrTIsEz.gb\n\n  ## Override message templates ##\n  #\n  # You can override certain or all message templates by pointing this key to the path where the templates are located.\n  #\n  # Examples:\n  # - /conf/courier-templates\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export COURIER_TEMPLATE_OVERRIDE_PATH=<value>\n  # - Windows Command Line (CMD):\n  #    > set COURIER_TEMPLATE_OVERRIDE_PATH=<value>\n  #\n  template_override_path: /conf/courier-templates\n\n## serve ##\n#\nserve:\n  ## admin ##\n  #\n  admin:\n    ## host ##\n    #\n    # Default value: 0.0.0.0\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_ADMIN_HOST=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_ADMIN_HOST=<value>\n    #\n    host: ut magna voluptate mollit ut\n\n    ## port ##\n    #\n    # Default value: 4434\n    #\n    # Examples:\n    # - 4434\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_ADMIN_PORT=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_ADMIN_PORT=<value>\n    #\n    port: 4434\n\n  ## public ##\n  #\n  public:\n    ## host ##\n    #\n    # Default value: 0.0.0.0\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_PUBLIC_HOST=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_PUBLIC_HOST=<value>\n    #\n    host: nulla ex\n\n    ## port ##\n    #\n    # Default value: 4433\n    #\n    # Examples:\n    # - 4433\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_PUBLIC_PORT=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_PUBLIC_PORT=<value>\n    #\n    port: 4433\n\n## urls ##\n#\nurls:\n  ## Settings UI URL ##\n  #\n  # URL where the Settings UI is hosted. Check the [reference implementation](https://github.com/ory/kratos-selfservice-ui-node).\n  #\n  # Examples:\n  # - https://my-app.com/user/settings\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_SETTINGS_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_SETTINGS_UI=<value>\n  #\n  settings_ui: https://my-app.com/user/settings\n\n  ## Login UI URL ##\n  #\n  # URL where the Login UI is hosted. Check the [reference implementation](https://github.com/ory/kratos-selfservice-ui-node).\n  #\n  # Examples:\n  # - https://my-app.com/login\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_LOGIN_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_LOGIN_UI=<value>\n  #\n  login_ui: https://my-app.com/login\n\n  ## Registration UI URL ##\n  #\n  # URL where the Registration UI is hosted. Check the [reference implementation](https://github.com/ory/kratos-selfservice-ui-node).\n  #\n  # Examples:\n  # - https://my-app.com/signup\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_REGISTRATION_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_REGISTRATION_UI=<value>\n  #\n  registration_ui: https://my-app.com/signup\n\n  ## ORY Kratos Error UI URL ##\n  #\n  # URL where the ORY Kratos Error UI is hosted. Check the [reference implementation](https://github.com/ory/kratos-selfservice-ui-node).\n  #\n  # Examples:\n  # - https://my-app.com/kratos-error\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_ERROR_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_ERROR_UI=<value>\n  #\n  error_ui: https://my-app.com/kratos-error\n\n  ## Verify UI URL ##\n  #\n  # URL where the ORY Verify UI is hosted. This is the page where users activate and / or verify their email or telephone number. Check the [reference implementation](https://github.com/ory/kratos-selfservice-ui-node).\n  #\n  # Examples:\n  # - https://my-app.com/verify\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_VERIFY_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_VERIFY_UI=<value>\n  #\n  verify_ui: https://my-app.com/verify\n\n  ## Default Return To URL ##\n  #\n  # ORY Kratos redirects to this URL per default on completion of self-service flows and other browser interaction. This value may be overridden by a `default_return_to` in a lower configuration level (`foo.bar.default_return_to` overrides `foo.default_return_to` overrides `default_return_to`) and by the `?return_to` query in certain cases.\n  #\n  # Examples:\n  # - https://my-app.com/dashboard\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_DEFAULT_RETURN_TO=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_DEFAULT_RETURN_TO=<value>\n  #\n  default_return_to: https://my-app.com/dashboard\n\n  ## self ##\n  #\n  self:\n    ## public ##\n    #\n    # Examples:\n    # - https://my-app.com/.ory/kratos/public\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export URLS_SELF_PUBLIC=<value>\n    # - Windows Command Line (CMD):\n    #    > set URLS_SELF_PUBLIC=<value>\n    #\n    public: https://my-app.com/.ory/kratos/public\n\n    ## admin ##\n    #\n    # Examples:\n    # - https://kratos.private-network:4434/\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export URLS_SELF_ADMIN=<value>\n    # - Windows Command Line (CMD):\n    #    > set URLS_SELF_ADMIN=<value>\n    #\n    admin: https://kratos.private-network:4434/\n\n  ## Multi-Factor UI URL ##\n  #\n  # URL where the Multi-Factor UI is hosted. Check the [reference implementation](https://github.com/ory/kratos-selfservice-ui-node).\n  #\n  # Examples:\n  # - https://my-app.com/login/mfa\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_MFA_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_MFA_UI=<value>\n  #\n  mfa_ui: https://my-app.com/login/mfa\n\n  ## Whitelisted Return To URLs ##\n  #\n  # List of URLs that are allowed to be redirected to. A redirection request is made by appending `?return_to=...` to Login, Registration, and other self-service flows.\n  #\n  # Examples:\n  # - https://app.my-app.com/dashboard\n  # - https://www.my-app.com/\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_WHITELISTED_RETURN_TO_URLS=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_WHITELISTED_RETURN_TO_URLS=<value>\n  #\n  whitelisted_return_to_urls: https://app.my-app.com/dashboard\n\n## log ##\n#\nlog:\n  ## level ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export LOG_LEVEL=<value>\n  # - Windows Command Line (CMD):\n  #    > set LOG_LEVEL=<value>\n  #\n  level: panic\n\n  ## format ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export LOG_FORMAT=<value>\n  # - Windows Command Line (CMD):\n  #    > set LOG_FORMAT=<value>\n  #\n  format: text\n\n## secrets ##\n#\nsecrets:\n  ## session ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export SECRETS_SESSION=<value>\n  # - Windows Command Line (CMD):\n  #    > set SECRETS_SESSION=<value>\n  #\n  session:\n    - est et inDuis deserunt\n    - ipsum et esse reprehenderit ex\n\n## hashers ##\n#\nhashers:\n  ## argon2 ##\n  #\n  argon2:\n    ## memory ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_MEMORY=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_MEMORY=<value>\n    #\n    memory: 9331228\n\n    ## iterations ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_ITERATIONS=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_ITERATIONS=<value>\n    #\n    iterations: 79739706\n\n    ## parallelism ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_PARALLELISM=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_PARALLELISM=<value>\n    #\n    parallelism: 28516587\n\n    ## salt_length ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_SALT_LENGTH=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_SALT_LENGTH=<value>\n    #\n    salt_length: 30364870\n\n    ## key_length ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_KEY_LENGTH=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_KEY_LENGTH=<value>\n    #\n    key_length: 70311011\n\n## security ##\n#\nsecurity:\n  ## session ##\n  #\n  session:\n    ## cookie ##\n    #\n    cookie:\n      ## same_site ##\n      #\n      # Default value: Lax\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SECURITY_SESSION_COOKIE_SAME_SITE=<value>\n      # - Windows Command Line (CMD):\n      #    > set SECURITY_SESSION_COOKIE_SAME_SITE=<value>\n      #\n      same_site: None\n')))}_.isMDXComponent=!0},215:function(n,e,t){"use strict";t.d(e,"a",(function(){return m})),t.d(e,"b",(function(){return E}));var o=t(0),a=t.n(o);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,o,a=function(n,e){if(null==n)return{};var t,o,a={},r=Object.keys(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var u=a.a.createContext({}),_=function(n){var e=a.a.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):s({},e,{},n)),t},m=function(n){var e=_(n.components);return a.a.createElement(u.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return a.a.createElement(a.a.Fragment,{},e)}},S=Object(o.forwardRef)((function(n,e){var t=n.components,o=n.mdxType,r=n.originalType,i=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),m=_(t),S=o,E=m["".concat(i,".").concat(S)]||m[S]||d[S]||r;return t?a.a.createElement(E,s({ref:e},u,{components:t})):a.a.createElement(E,s({ref:e},u))}));function E(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var r=t.length,i=new Array(r);i[0]=S;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s.mdxType="string"==typeof n?n:o,i[1]=s;for(var u=2;u<r;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}S.displayName="MDXCreateElement"}}]);