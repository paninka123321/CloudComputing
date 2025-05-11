from setuptools import setup

setup(
    name='kohonen-model',
    version='0.1',
    packages=['trainer'],
    install_requires=[
        'pandas',
        'numpy',
        'scikit-learn',
        'joblib'
    ],
    entry_points={
        'console_scripts': ['run-train=trainer.task:main']
    }
)
