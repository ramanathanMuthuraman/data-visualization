from setuptools import setup

exec (open('periscope_archetype/version.py').read())

setup(
    name='periscope_archetype',
    version=__version__,
    author='periscope',
    packages=['periscope_archetype'],
    include_package_data=True,
    license='MIT',
    description='periscope-components',
    install_requires=[]
)
