"""
The `pydash_app` package contains all business domain logic of the PyDash application: Everything that is not part of rendering a set of webpages.
"""
import pydash_app.impl.background_tasks

impl.background_tasks.start_scheduler()
