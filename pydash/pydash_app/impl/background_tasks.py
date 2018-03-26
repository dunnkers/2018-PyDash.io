"""
Performs the handling of running background tasks from within the PyDash App.
"""

from multiprocessing import Process
import chronos
from chronos import every, every_at

def init_scheduler():
    chronos.setup()

def start_scheduler():
    """
    Should be called as soon as app is started
    (After application is set up and all functions that want to be run peridically have added their stuff.)
    """
    Process(target=chronos.start, args=[True]).start()

def periodic_task(name, chronos_interval):
    def schedule_wrapper(func):
        chronos.schedule(name, chronos_interval, func, process=True)
        return func

    return schedule_wrapper

def background_task(name):
    def background_wrapper(func):
        chronos.schedule(name, every(1).second, func, process=True, once=True, start=True)
        return func
    return background_wrapper

# Called as soon as file is imported, to ensure tasks can be added.
init_scheduler()


@periodic_task("test_print", every(1).second)
def test_print():
    print("Testing background tasks")

@background_task('foo')
def foo():
    print('Foo! in the background')
