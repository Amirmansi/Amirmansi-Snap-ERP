from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in dox_theme/__init__.py
from dox_theme import __version__ as version

setup(
	name="dox_theme",
	version=version,
	description="Dox Theme",
	author="Nesscale",
	author_email="info@nesscale.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
