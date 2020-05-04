(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{161:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return i})),t.d(e,"metadata",(function(){return s})),t.d(e,"rightToc",(function(){return l})),t.d(e,"default",(function(){return _}));var o=t(1),a=t(9),r=(t(0),t(227)),i={id:"configuration",title:"Configuration"},s={id:"reference/configuration",title:"Configuration",description:"\x3c!-- THIS FILE IS BEING AUTO-GENERATED. DO NOT MODIFY IT AS ALL CHANGES WILL BE OVERWRITTEN.",source:"@site/docs/reference/configuration.md",permalink:"/kratos/docs/next/reference/configuration",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/reference/configuration.md",version:"next",lastUpdatedBy:"hackerman",lastUpdatedAt:1588432565,sidebar:"docs",previous:{title:"High Availability",permalink:"/kratos/docs/next/guides/high-availability-ha"},next:{title:"JSON Schema and JSON Paths",permalink:"/kratos/docs/next/reference/json-schema-json-paths"}},l=[],u={rightToc:l};function _(n){var e=n.components,t=Object(a.a)(n,["components"]);return Object(r.b)("wrapper",Object(o.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"If file ",Object(r.b)("inlineCode",{parentName:"p"},"$HOME/.kratos.yaml")," exists, it will be used as a configuration file\nwhich supports all configuration settings listed below."),Object(r.b)("p",null,"You can load the config file from another source using the\n",Object(r.b)("inlineCode",{parentName:"p"},"-c path/to/config.yaml")," or ",Object(r.b)("inlineCode",{parentName:"p"},"--config path/to/config.yaml")," flag:\n",Object(r.b)("inlineCode",{parentName:"p"},"kratos --config path/to/config.yaml"),"."),Object(r.b)("p",null,"Config files can be formatted as JSON, YAML and TOML. Some configuration values\nsupport reloading without server restart. All configuration values can be set\nusing environment variables, as documented below."),Object(r.b)("p",null,"To find out more about edge cases like setting string array values through\nenvironmental variables head to the\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.ory.sh/docs/ecosystem/configuring"}),"Configuring ORY services"),"\nsection."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),'## ORY Kratos Configuration\n#\n\n## Data Source Name ##\n#\n# DSN is used to specify the database credentials as a connection URI.\n#\n# Examples:\n# - "postgres://user:\n#   password@postgresd:5432/database?sslmode=disable&max_conns=20&max_idle_conns=\\\n#   4"\n# - mysql://user:secret@tcp(mysqld:3306)/database?max_conns=20&max_idle_conns=4\n# - cockroach://user@cockroachdb:26257/database?sslmode=disable&max_conns=20&max_idle_conns=4\n# - sqlite:///var/lib/sqlite/db.sqlite?_fk=true&mode=rwc\n#\n# Set this value using environment variables on\n# - Linux/macOS:\n#    $ export DSN=<value>\n# - Windows Command Line (CMD):\n#    > set DSN=<value>\n#\ndsn: cockroach://user@cockroachdb:26257/database?sslmode=disable&max_conns=20&max_idle_conns=4\n\n## identity ##\n#\nidentity:\n  ## traits ##\n  #\n  traits:\n    ## JSON Schema URL for default identity traits ##\n    #\n    # Path to the JSON Schema which describes a default identity\'s traits.\n    #\n    # Examples:\n    # - file://path/to/identity.traits.schema.json\n    # - httpss://foo.bar.com/path/to/identity.traits.schema.json\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export IDENTITY_TRAITS_DEFAULT_SCHEMA_URL=<value>\n    # - Windows Command Line (CMD):\n    #    > set IDENTITY_TRAITS_DEFAULT_SCHEMA_URL=<value>\n    #\n    default_schema_url: file://path/to/identity.traits.schema.json\n\n    ## Additional JSON Schemas for Identity Traits ##\n    #\n    # Examples:\n    # - - id: customer\n    #     url: https://foo.bar.com/path/to/customer.traits.schema.json\n    #   - id: employee\n    #     url: https://foo.bar.com/path/to/employee.traits.schema.json\n    #   - id: employee-v2\n    #     url: https://foo.bar.com/path/to/employee.v2.traits.schema.json\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export IDENTITY_TRAITS_SCHEMAS=<value>\n    # - Windows Command Line (CMD):\n    #    > set IDENTITY_TRAITS_SCHEMAS=<value>\n    #\n    schemas:\n      - id: customer\n        url: https://foo.bar.com/path/to/customer.traits.schema.json\n      - id: employee\n        url: https://foo.bar.com/path/to/employee.traits.schema.json\n      - id: employee-v2\n        url: https://foo.bar.com/path/to/employee.v2.traits.schema.json\n\n## selfservice ##\n#\nselfservice:\n  ## strategies ##\n  #\n  strategies:\n    ## password ##\n    #\n    password:\n      ## enabled ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_STRATEGIES_PASSWORD_ENABLED=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_STRATEGIES_PASSWORD_ENABLED=<value>\n      #\n      enabled: true\n\n    ## oidc ##\n    #\n    oidc:\n      ## enabled ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_STRATEGIES_OIDC_ENABLED=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_STRATEGIES_OIDC_ENABLED=<value>\n      #\n      enabled: true\n\n      ## config ##\n      #\n      config:\n        ## OpenID Connect and OAuth2 Providers ##\n        #\n        # A list and configuration of OAuth2 and OpenID Connect providers ORY Kratos should integrate with.\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_STRATEGIES_OIDC_CONFIG_PROVIDERS=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_STRATEGIES_OIDC_CONFIG_PROVIDERS=<value>\n        #\n        providers:\n          - id: google\n            provider: google\n            client_id: dolore amet laboris aute\n            client_secret: eu voluptate adipisicing\n            schema_url: file://path/to/oidc.schema.json\n            issuer_url: https://accounts.google.com\n            auth_url: https://accounts.google.com/o/oauth2/v2/auth\n            token_url: https://www.googleapis.com/oauth2/v4/token\n            scope:\n              - profile\n              - offline_access\n              - offline_access\n              - profile\n              - profile\n\n  ## logout ##\n  #\n  logout:\n    ## Redirect to URL after logout ##\n    #\n    # Examples:\n    # - https://www.myapp.com/home\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_LOGOUT_REDIRECT_TO=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_LOGOUT_REDIRECT_TO=<value>\n    #\n    redirect_to: https://www.myapp.com/home\n\n  ## settings ##\n  #\n  settings:\n    ## request_lifespan ##\n    #\n    # Default value: 1h\n    #\n    # Examples:\n    # - 1h\n    # - 1m\n    # - 1s\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_SETTINGS_REQUEST_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_SETTINGS_REQUEST_LIFESPAN=<value>\n    #\n    request_lifespan: 1h\n\n    ## privileged_session_max_age ##\n    #\n    # Default value: 1h\n    #\n    # Examples:\n    # - 1h\n    # - 1m\n    # - 1s\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_SETTINGS_PRIVILEGED_SESSION_MAX_AGE=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_SETTINGS_PRIVILEGED_SESSION_MAX_AGE=<value>\n    #\n    privileged_session_max_age: 1m\n\n    ## after ##\n    #\n    after:\n      ## Default Return To URL ##\n      #\n      # ORY Kratos redirects to this URL per default on completion of self-service flows and other browser interaction. This value may be overridden by a `default_return_to` in a lower configuration level (`foo.bar.default_return_to` overrides `foo.default_return_to` overrides `default_return_to`) and by the `?return_to` query in certain cases.\n      #\n      # Examples:\n      # - https://my-app.com/dashboard\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_SETTINGS_AFTER_DEFAULT_RETURN_TO=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_SETTINGS_AFTER_DEFAULT_RETURN_TO=<value>\n      #\n      default_return_to: https://my-app.com/dashboard\n\n      ## password ##\n      #\n      password:\n        ## Default Return To URL ##\n        #\n        # ORY Kratos redirects to this URL per default on completion of self-service flows and other browser interaction. This value may be overridden by a `default_return_to` in a lower configuration level (`foo.bar.default_return_to` overrides `foo.default_return_to` overrides `default_return_to`) and by the `?return_to` query in certain cases.\n        #\n        # Examples:\n        # - https://my-app.com/dashboard\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_SETTINGS_AFTER_PASSWORD_DEFAULT_RETURN_TO=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_SETTINGS_AFTER_PASSWORD_DEFAULT_RETURN_TO=<value>\n        #\n        default_return_to: https://my-app.com/dashboard\n\n        ## hooks ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_SETTINGS_AFTER_PASSWORD_HOOKS=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_SETTINGS_AFTER_PASSWORD_HOOKS=<value>\n        #\n        hooks:\n          - hook: verify\n\n      ## profile ##\n      #\n      profile:\n        ## Default Return To URL ##\n        #\n        # ORY Kratos redirects to this URL per default on completion of self-service flows and other browser interaction. This value may be overridden by a `default_return_to` in a lower configuration level (`foo.bar.default_return_to` overrides `foo.default_return_to` overrides `default_return_to`) and by the `?return_to` query in certain cases.\n        #\n        # Examples:\n        # - https://my-app.com/dashboard\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_SETTINGS_AFTER_PROFILE_DEFAULT_RETURN_TO=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_SETTINGS_AFTER_PROFILE_DEFAULT_RETURN_TO=<value>\n        #\n        default_return_to: https://my-app.com/dashboard\n\n        ## hooks ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_SETTINGS_AFTER_PROFILE_HOOKS=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_SETTINGS_AFTER_PROFILE_HOOKS=<value>\n        #\n        hooks:\n          - hook: verify\n\n  ## verify ##\n  #\n  verify:\n    ## Self-Service Verification Request Lifespan ##\n    #\n    # Sets how long the verification request (for the UI interaction) is valid.\n    #\n    # Default value: 1h\n    #\n    # Examples:\n    # - 1h\n    # - 1m\n    # - 1s\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_VERIFY_REQUEST_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_VERIFY_REQUEST_LIFESPAN=<value>\n    #\n    request_lifespan: 1s\n\n    ## Self-Service Verification Link Lifespan ##\n    #\n    # Sets how long the verification link (e.g. the one sent via email) is valid for.\n    #\n    # Default value: 24h\n    #\n    # Examples:\n    # - 1h\n    # - 1m\n    # - 1s\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_VERIFY_LINK_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_VERIFY_LINK_LIFESPAN=<value>\n    #\n    link_lifespan: 1s\n\n  ## login ##\n  #\n  login:\n    ## request_lifespan ##\n    #\n    # Default value: 1h\n    #\n    # Examples:\n    # - 1h\n    # - 1m\n    # - 1s\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_LOGIN_REQUEST_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_LOGIN_REQUEST_LIFESPAN=<value>\n    #\n    request_lifespan: 1s\n\n    ## before ##\n    #\n    before:\n      ## hooks ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_LOGIN_BEFORE_HOOKS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_LOGIN_BEFORE_HOOKS=<value>\n      #\n      hooks:\n        - hook: redirect\n          config:\n            default_redirect_url: https://lBXLzqIPSBWfPMGYViMZnv.uetMv+pOAUJ,PfsZK1QwZwW.IYBFHfydppAC+KWVqfrcuxRxsC\n            allow_user_defined_redirect: true\n        - hook: redirect\n          config:\n            default_redirect_url: https://GajUgskQXTEsQjcuawYjvkolwHFv.zykLnNevFcJz4dlPATFGa87\n            allow_user_defined_redirect: false\n        - hook: redirect\n          config:\n            default_redirect_url: https://jGOP.gkcIbMXqHQ0.vBP.PHFwaEcMmtiTaOKOQMwA\n            allow_user_defined_redirect: false\n        - hook: redirect\n          config:\n            default_redirect_url: https://stFsxWmNRHJhYVZlkE.xixbNoiZNPrlpOKmmpk\n            allow_user_defined_redirect: true\n        - hook: redirect\n          config:\n            default_redirect_url: http://SiHECfQwpqkBObkQCToUtxnYPxpGy.uopnVBEIADwVfc.5IyiAnGpQiLkHmqGTfydLaeay3NTUOBFdu2FaVI\n            allow_user_defined_redirect: true\n\n    ## after ##\n    #\n    after:\n      ## Default Return To URL ##\n      #\n      # ORY Kratos redirects to this URL per default on completion of self-service flows and other browser interaction. This value may be overridden by a `default_return_to` in a lower configuration level (`foo.bar.default_return_to` overrides `foo.default_return_to` overrides `default_return_to`) and by the `?return_to` query in certain cases.\n      #\n      # Examples:\n      # - https://my-app.com/dashboard\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_LOGIN_AFTER_DEFAULT_RETURN_TO=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_LOGIN_AFTER_DEFAULT_RETURN_TO=<value>\n      #\n      default_return_to: https://my-app.com/dashboard\n\n      ## password ##\n      #\n      password:\n        ## Default Return To URL ##\n        #\n        # ORY Kratos redirects to this URL per default on completion of self-service flows and other browser interaction. This value may be overridden by a `default_return_to` in a lower configuration level (`foo.bar.default_return_to` overrides `foo.default_return_to` overrides `default_return_to`) and by the `?return_to` query in certain cases.\n        #\n        # Examples:\n        # - https://my-app.com/dashboard\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_LOGIN_AFTER_PASSWORD_DEFAULT_RETURN_TO=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_LOGIN_AFTER_PASSWORD_DEFAULT_RETURN_TO=<value>\n        #\n        default_return_to: https://my-app.com/dashboard\n\n        ## hooks ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_LOGIN_AFTER_PASSWORD_HOOKS=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_LOGIN_AFTER_PASSWORD_HOOKS=<value>\n        #\n        hooks:\n          - hook: revoke_active_sessions\n\n      ## oidc ##\n      #\n      oidc:\n        ## Default Return To URL ##\n        #\n        # ORY Kratos redirects to this URL per default on completion of self-service flows and other browser interaction. This value may be overridden by a `default_return_to` in a lower configuration level (`foo.bar.default_return_to` overrides `foo.default_return_to` overrides `default_return_to`) and by the `?return_to` query in certain cases.\n        #\n        # Examples:\n        # - https://my-app.com/dashboard\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_LOGIN_AFTER_OIDC_DEFAULT_RETURN_TO=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_LOGIN_AFTER_OIDC_DEFAULT_RETURN_TO=<value>\n        #\n        default_return_to: https://my-app.com/dashboard\n\n        ## hooks ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_LOGIN_AFTER_OIDC_HOOKS=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_LOGIN_AFTER_OIDC_HOOKS=<value>\n        #\n        hooks:\n          - hook: revoke_active_sessions\n\n  ## registration ##\n  #\n  registration:\n    ## request_lifespan ##\n    #\n    # Default value: 1h\n    #\n    # Examples:\n    # - 1h\n    # - 1m\n    # - 1s\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_REGISTRATION_REQUEST_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_REGISTRATION_REQUEST_LIFESPAN=<value>\n    #\n    request_lifespan: 1m\n\n    ## before ##\n    #\n    before:\n      ## hooks ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_REGISTRATION_BEFORE_HOOKS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_REGISTRATION_BEFORE_HOOKS=<value>\n      #\n      hooks:\n        - hook: redirect\n          config:\n            default_redirect_url: https://qmtmFSlXlifRSEgOOKz.rlenKucK5t0iQDdX-PTfP2XDCovSVC+LXX\n            allow_user_defined_redirect: false\n        - hook: redirect\n          config:\n            default_redirect_url: http://eJDovEWpBtZRv.zolm8oP6qi\n            allow_user_defined_redirect: true\n        - hook: redirect\n          config:\n            default_redirect_url: http://zDcverdDWsJrybUdCMf.lshfO.V+RCPbqBs-m6IcWJxTM+.YVgnKHfckICcxg8Do5,GwIap82e.KYvhdC4YGpqZkBLoEw4EZdDoNZ1A\n            allow_user_defined_redirect: false\n        - hook: redirect\n          config:\n            default_redirect_url: https://EzbOBeSCBGyOqbWLzBMMa.vbxiQSHZsLnstmyQZIauus6gM3-etaiCKlJ0ovodwB-MkuiSWKglpJ1DpmgSSwPZrX7LBv\n            allow_user_defined_redirect: true\n\n    ## after ##\n    #\n    after:\n      ## Default Return To URL ##\n      #\n      # ORY Kratos redirects to this URL per default on completion of self-service flows and other browser interaction. This value may be overridden by a `default_return_to` in a lower configuration level (`foo.bar.default_return_to` overrides `foo.default_return_to` overrides `default_return_to`) and by the `?return_to` query in certain cases.\n      #\n      # Examples:\n      # - https://my-app.com/dashboard\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_REGISTRATION_AFTER_DEFAULT_RETURN_TO=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_REGISTRATION_AFTER_DEFAULT_RETURN_TO=<value>\n      #\n      default_return_to: https://my-app.com/dashboard\n\n      ## password ##\n      #\n      password:\n        ## Default Return To URL ##\n        #\n        # ORY Kratos redirects to this URL per default on completion of self-service flows and other browser interaction. This value may be overridden by a `default_return_to` in a lower configuration level (`foo.bar.default_return_to` overrides `foo.default_return_to` overrides `default_return_to`) and by the `?return_to` query in certain cases.\n        #\n        # Examples:\n        # - https://my-app.com/dashboard\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_REGISTRATION_AFTER_PASSWORD_DEFAULT_RETURN_TO=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_REGISTRATION_AFTER_PASSWORD_DEFAULT_RETURN_TO=<value>\n        #\n        default_return_to: https://my-app.com/dashboard\n\n        ## hooks ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_REGISTRATION_AFTER_PASSWORD_HOOKS=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_REGISTRATION_AFTER_PASSWORD_HOOKS=<value>\n        #\n        hooks:\n          - hook: verify\n          - hook: redirect\n            config:\n              default_redirect_url: http://vNLKHIyreIwthFrPSVTXMOLFjgpZJo.rlnkF8+VjzuuXLorTasPL8pZcVDEsAehw.5aA+wTvMJ7ZeYmCieSq\n              allow_user_defined_redirect: false\n\n      ## oidc ##\n      #\n      oidc:\n        ## Default Return To URL ##\n        #\n        # ORY Kratos redirects to this URL per default on completion of self-service flows and other browser interaction. This value may be overridden by a `default_return_to` in a lower configuration level (`foo.bar.default_return_to` overrides `foo.default_return_to` overrides `default_return_to`) and by the `?return_to` query in certain cases.\n        #\n        # Examples:\n        # - https://my-app.com/dashboard\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_REGISTRATION_AFTER_OIDC_DEFAULT_RETURN_TO=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_REGISTRATION_AFTER_OIDC_DEFAULT_RETURN_TO=<value>\n        #\n        default_return_to: https://my-app.com/dashboard\n\n        ## hooks ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_REGISTRATION_AFTER_OIDC_HOOKS=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_REGISTRATION_AFTER_OIDC_HOOKS=<value>\n        #\n        hooks:\n          - hook: redirect\n            config:\n              default_redirect_url: http://jeGxabFquWPxuRLVybOQZ.fsxwRboFdFGZ-uIFRd4QZA\n              allow_user_defined_redirect: true\n          - hook: session\n\n## Courier configuration ##\n#\n# The courier is responsible for sending and delivering messages over email, sms, and other means.\n#\ncourier:\n  ## SMTP Configuration ##\n  #\n  # Configures outgoing emails using the SMTP protocol.\n  #\n  smtp:\n    ## SMTP connection string ##\n    #\n    # This URI will be used to connect to the SMTP server. Use the query parameter to allow (`?skip_ssl_verify=true`) or disallow (`?skip_ssl_verify=false`) self-signed TLS certificates. Please keep in mind that any host other than localhost / 127.0.0.1 must use smtp over TLS (smtps) or the connection will not be possible.\n    #\n    # Examples:\n    # - smtps://foo:bar@my-mailserver:1234/?skip_ssl_verify=false\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export COURIER_SMTP_CONNECTION_URI=<value>\n    # - Windows Command Line (CMD):\n    #    > set COURIER_SMTP_CONNECTION_URI=<value>\n    #\n    connection_uri: smtps://foo:bar@my-mailserver:1234/?skip_ssl_verify=false\n\n    ## SMTP Sender Address ##\n    #\n    # The recipient of an email will see this as the sender address.\n    #\n    # Default value: no-reply@ory.kratos.sh\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export COURIER_SMTP_FROM_ADDRESS=<value>\n    # - Windows Command Line (CMD):\n    #    > set COURIER_SMTP_FROM_ADDRESS=<value>\n    #\n    from_address: rMdxQJilddA@RMDlEcsnNCyMtbH.dmdw\n\n  ## Override message templates ##\n  #\n  # You can override certain or all message templates by pointing this key to the path where the templates are located.\n  #\n  # Examples:\n  # - /conf/courier-templates\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export COURIER_TEMPLATE_OVERRIDE_PATH=<value>\n  # - Windows Command Line (CMD):\n  #    > set COURIER_TEMPLATE_OVERRIDE_PATH=<value>\n  #\n  template_override_path: /conf/courier-templates\n\n## serve ##\n#\nserve:\n  ## admin ##\n  #\n  admin:\n    ## host ##\n    #\n    # Default value: 0.0.0.0\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_ADMIN_HOST=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_ADMIN_HOST=<value>\n    #\n    host: labore incididunt\n\n    ## port ##\n    #\n    # Default value: 4434\n    #\n    # Examples:\n    # - 4434\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_ADMIN_PORT=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_ADMIN_PORT=<value>\n    #\n    port: 4434\n\n  ## public ##\n  #\n  public:\n    ## host ##\n    #\n    # Default value: 0.0.0.0\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_PUBLIC_HOST=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_PUBLIC_HOST=<value>\n    #\n    host: fugiat enim velit\n\n    ## port ##\n    #\n    # Default value: 4433\n    #\n    # Examples:\n    # - 4433\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_PUBLIC_PORT=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_PUBLIC_PORT=<value>\n    #\n    port: 4433\n\n## urls ##\n#\nurls:\n  ## self ##\n  #\n  self:\n    ## public ##\n    #\n    # Examples:\n    # - https://my-app.com/.ory/kratos/public\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export URLS_SELF_PUBLIC=<value>\n    # - Windows Command Line (CMD):\n    #    > set URLS_SELF_PUBLIC=<value>\n    #\n    public: https://my-app.com/.ory/kratos/public\n\n    ## admin ##\n    #\n    # Examples:\n    # - https://kratos.private-network:4434/\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export URLS_SELF_ADMIN=<value>\n    # - Windows Command Line (CMD):\n    #    > set URLS_SELF_ADMIN=<value>\n    #\n    admin: https://kratos.private-network:4434/\n\n  ## Multi-Factor UI URL ##\n  #\n  # URL where the Multi-Factor UI is hosted. Check the [reference implementation](https://github.com/ory/kratos-selfservice-ui-node).\n  #\n  # Default value: https://www.ory.sh/kratos/docs/fallback/mfa\n  #\n  # Examples:\n  # - https://my-app.com/login/mfa\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_MFA_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_MFA_UI=<value>\n  #\n  mfa_ui: https://my-app.com/login/mfa\n\n  ## Login UI URL ##\n  #\n  # URL where the Login UI is hosted. Check the [reference implementation](https://github.com/ory/kratos-selfservice-ui-node).\n  #\n  # Default value: https://www.ory.sh/kratos/docs/fallback/login\n  #\n  # Examples:\n  # - https://my-app.com/login\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_LOGIN_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_LOGIN_UI=<value>\n  #\n  login_ui: https://www.ory.sh/kratos/docs/fallback/login\n\n  ## Settings UI URL ##\n  #\n  # URL where the Settings UI is hosted. Check the [reference implementation](https://github.com/ory/kratos-selfservice-ui-node).\n  #\n  # Default value: https://www.ory.sh/kratos/docs/fallback/settings\n  #\n  # Examples:\n  # - https://my-app.com/user/settings\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_SETTINGS_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_SETTINGS_UI=<value>\n  #\n  settings_ui: https://www.ory.sh/kratos/docs/fallback/settings\n\n  ## Default Return To URL ##\n  #\n  # ORY Kratos redirects to this URL per default on completion of self-service flows and other browser interaction. This value may be overridden by a `default_return_to` in a lower configuration level (`foo.bar.default_return_to` overrides `foo.default_return_to` overrides `default_return_to`) and by the `?return_to` query in certain cases.\n  #\n  # Examples:\n  # - https://my-app.com/dashboard\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_DEFAULT_RETURN_TO=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_DEFAULT_RETURN_TO=<value>\n  #\n  default_return_to: https://my-app.com/dashboard\n\n  ## Registration UI URL ##\n  #\n  # URL where the Registration UI is hosted. Check the [reference implementation](https://github.com/ory/kratos-selfservice-ui-node).\n  #\n  # Default value: https://www.ory.sh/kratos/docs/fallback/registration\n  #\n  # Examples:\n  # - https://my-app.com/signup\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_REGISTRATION_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_REGISTRATION_UI=<value>\n  #\n  registration_ui: https://www.ory.sh/kratos/docs/fallback/registration\n\n  ## ORY Kratos Error UI URL ##\n  #\n  # URL where the ORY Kratos Error UI is hosted. Check the [reference implementation](https://github.com/ory/kratos-selfservice-ui-node).\n  #\n  # Default value: https://www.ory.sh/kratos/docs/fallback/error\n  #\n  # Examples:\n  # - https://my-app.com/kratos-error\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_ERROR_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_ERROR_UI=<value>\n  #\n  error_ui: https://www.ory.sh/kratos/docs/fallback/error\n\n  ## Verify UI URL ##\n  #\n  # URL where the ORY Verify UI is hosted. This is the page where users activate and / or verify their email or telephone number. Check the [reference implementation](https://github.com/ory/kratos-selfservice-ui-node).\n  #\n  # Default value: https://www.ory.sh/kratos/docs/fallback/verify\n  #\n  # Examples:\n  # - https://my-app.com/verify\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_VERIFY_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_VERIFY_UI=<value>\n  #\n  verify_ui: https://www.ory.sh/kratos/docs/fallback/verify\n\n  ## Whitelisted Return To URLs ##\n  #\n  # List of URLs that are allowed to be redirected to. A redirection request is made by appending `?return_to=...` to Login, Registration, and other self-service flows.\n  #\n  # Examples:\n  # - https://app.my-app.com/dashboard\n  # - https://www.my-app.com/\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_WHITELISTED_RETURN_TO_URLS=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_WHITELISTED_RETURN_TO_URLS=<value>\n  #\n  whitelisted_return_to_urls: https://app.my-app.com/dashboard\n\n## log ##\n#\nlog:\n  ## level ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export LOG_LEVEL=<value>\n  # - Windows Command Line (CMD):\n  #    > set LOG_LEVEL=<value>\n  #\n  level: panic\n\n  ## format ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export LOG_FORMAT=<value>\n  # - Windows Command Line (CMD):\n  #    > set LOG_FORMAT=<value>\n  #\n  format: json\n\n## secrets ##\n#\nsecrets:\n  ## session ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export SECRETS_SESSION=<value>\n  # - Windows Command Line (CMD):\n  #    > set SECRETS_SESSION=<value>\n  #\n  session:\n    - adipisicing euconsectetur\n\n## hashers ##\n#\nhashers:\n  ## argon2 ##\n  #\n  argon2:\n    ## memory ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_MEMORY=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_MEMORY=<value>\n    #\n    memory: 39916625\n\n    ## iterations ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_ITERATIONS=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_ITERATIONS=<value>\n    #\n    iterations: 29691733\n\n    ## parallelism ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_PARALLELISM=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_PARALLELISM=<value>\n    #\n    parallelism: 49692897\n\n    ## salt_length ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_SALT_LENGTH=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_SALT_LENGTH=<value>\n    #\n    salt_length: 98007808\n\n    ## key_length ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_KEY_LENGTH=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_KEY_LENGTH=<value>\n    #\n    key_length: 88964\n\n## security ##\n#\nsecurity:\n  ## session ##\n  #\n  session:\n    ## cookie ##\n    #\n    cookie:\n      ## same_site ##\n      #\n      # Default value: Lax\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SECURITY_SESSION_COOKIE_SAME_SITE=<value>\n      # - Windows Command Line (CMD):\n      #    > set SECURITY_SESSION_COOKIE_SAME_SITE=<value>\n      #\n      same_site: Lax\n')))}_.isMDXComponent=!0},227:function(n,e,t){"use strict";t.d(e,"a",(function(){return d})),t.d(e,"b",(function(){return E}));var o=t(0),a=t.n(o);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,o,a=function(n,e){if(null==n)return{};var t,o,a={},r=Object.keys(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var u=a.a.createContext({}),_=function(n){var e=a.a.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):s({},e,{},n)),t},d=function(n){var e=_(n.components);return a.a.createElement(u.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return a.a.createElement(a.a.Fragment,{},e)}},c=Object(o.forwardRef)((function(n,e){var t=n.components,o=n.mdxType,r=n.originalType,i=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),d=_(t),c=o,E=d["".concat(i,".").concat(c)]||d[c]||m[c]||r;return t?a.a.createElement(E,s({ref:e},u,{components:t})):a.a.createElement(E,s({ref:e},u))}));function E(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var r=t.length,i=new Array(r);i[0]=c;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s.mdxType="string"==typeof n?n:o,i[1]=s;for(var u=2;u<r;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}c.displayName="MDXCreateElement"}}]);