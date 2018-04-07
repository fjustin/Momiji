# -*- encoding: utf-8 -*-
# stub: meta-tags 2.9.0 ruby lib

Gem::Specification.new do |s|
  s.name = "meta-tags".freeze
  s.version = "2.9.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Dmytro Shteflyuk".freeze]
  s.bindir = "exe".freeze
  s.cert_chain = ["-----BEGIN CERTIFICATE-----\nMIIDcDCCAligAwIBAgIBATANBgkqhkiG9w0BAQUFADA/MQ8wDQYDVQQDDAZrcHVt\ndWsxFjAUBgoJkiaJk/IsZAEZFgZrcHVtdWsxFDASBgoJkiaJk/IsZAEZFgRpbmZv\nMB4XDTE3MDgyNDE2MDUzOVoXDTE4MDgyNDE2MDUzOVowPzEPMA0GA1UEAwwGa3B1\nbXVrMRYwFAYKCZImiZPyLGQBGRYGa3B1bXVrMRQwEgYKCZImiZPyLGQBGRYEaW5m\nbzCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALw2YroZc+IT+rs8NuPu\nc13DelrxrpAgPEu1zuRb3l7WaHRNWA4TyS8Z6Aa1G2O+FdUZNMW1n7IwP/QMJ9Mz\nahRBiTmhik5kasJ9s0h1lq5/hZiycm0o5OtGioUzCkvk+UEMpzMHbLmVSZCzYciy\nNDRDbXB0rLLu1eJk+gKgn6Qf5vj93h1w28BdWdaA7YegtbmipZ+pjmzCQAfPActT\n6uXHG4dSo7Lz9jiFRI5dUizFbGXcRqkQ2b5AB8FFmfcvbqERvzQKBICnybjsKP0N\npJ3vGgO2sh5GvJFOPk1Vlur2nX9ZFznPEP1CEAQ+NFrmKRt355Z5sgOkAojSGnIL\n/1sCAwEAAaN3MHUwCQYDVR0TBAIwADALBgNVHQ8EBAMCBLAwHQYDVR0OBBYEFPa4\nVFc1YOlV1u/7EGTwMCAk8YE9MB0GA1UdEQQWMBSBEmtwdW11a0BrcHVtdWsuaW5m\nbzAdBgNVHRIEFjAUgRJrcHVtdWtAa3B1bXVrLmluZm8wDQYJKoZIhvcNAQEFBQAD\nggEBADVN1hwt6ryAPcL8DBB7wM/cYy3oVpYDO1rLGfrdEOgI/Kz+qYbp+6cx9RCY\nDOY6N3GVifGBlFEuyfY3Nubx9mG0FzyBytU7Cb+u+HF3Aw/MnGRoUuY3bzxy3sVE\nt9uyKLaSN0e70mipmWWHhzIZg9sXFfNNt1vLipuw8ZScyoJAa1p5AK4syX6ZAL9G\ng8psHzMWdefrDNJaB8PG8BI2Nb0sIKs8HdACKZo+qDO6b+oi4Wk0nLbRH7qnJcww\nQwaoNrsQi488Dsk54YiNQWVouzfjRqEa4uUxSyKmRfQp7MNILESAOCXM+wZIxanu\nC9c9eUxgNTnHhsR3sK0QCIMwtUI=\n-----END CERTIFICATE-----\n".freeze]
  s.date = "2018-03-29"
  s.description = "Search Engine Optimization (SEO) plugin for Ruby on Rails applications.".freeze
  s.email = ["kpumuk@kpumuk.info".freeze]
  s.homepage = "http://github.com/kpumuk/meta-tags".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "2.7.4".freeze
  s.summary = "Collection of SEO helpers for Ruby on Rails.".freeze

  s.installed_by_version = "2.7.4" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<actionpack>.freeze, ["< 5.3", ">= 3.2.0"])
      s.add_development_dependency(%q<rake>.freeze, ["~> 12.0"])
      s.add_development_dependency(%q<rspec>.freeze, ["~> 3.6.0"])
      s.add_development_dependency(%q<rspec-html-matchers>.freeze, ["~> 0.9.1"])
    else
      s.add_dependency(%q<actionpack>.freeze, ["< 5.3", ">= 3.2.0"])
      s.add_dependency(%q<rake>.freeze, ["~> 12.0"])
      s.add_dependency(%q<rspec>.freeze, ["~> 3.6.0"])
      s.add_dependency(%q<rspec-html-matchers>.freeze, ["~> 0.9.1"])
    end
  else
    s.add_dependency(%q<actionpack>.freeze, ["< 5.3", ">= 3.2.0"])
    s.add_dependency(%q<rake>.freeze, ["~> 12.0"])
    s.add_dependency(%q<rspec>.freeze, ["~> 3.6.0"])
    s.add_dependency(%q<rspec-html-matchers>.freeze, ["~> 0.9.1"])
  end
end
