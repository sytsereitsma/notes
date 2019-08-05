# Using the property monitor

See this example:
```python
    destination_id = con.NewPropertySubscriptionDestination(con.GetLocalIp(), 1000)
    print("  Destination ID: {}".format(destination_id))

    monitor_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    monitor_socket.settimeout(1.0)
    monitor_socket.connect((con.GetRemoteIp(), 19200))
    monitor_socket.send("#SessionID={};".format(con.GetSessionID()))

    properties = \
        "<Properties>" \
        "  <Element Station='ST1' Property='Master span' ID='123'/>" \
        "</Properties>"

    subscription_id = con.NewPropertySubscription(destination_id, 1.0, properties)
    print("  Subscription ID: {}".format(subscription_id))

    data = monitor_socket.recv(1024)
    destination_id = con.NewPropertySubscriptionDestination(con.GetLocalIp(), 1000)
    print("  Destination ID: {}".format(destination_id))

    monitor_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    monitor_socket.settimeout(1.0)
    monitor_socket.connect((con.GetRemoteIp(), 19200))
    monitor_socket.send("#SessionID={};".format(con.GetSessionID()))

    properties = \
        "<Properties>" \
        "  <Element Station='ST1' Property='Master span' ID='123'/>" \
        "</Properties>"

    subscription_id = con.NewPropertySubscription(destination_id, 1.0, properties)
    print("  Subscription ID: {}".format(subscription_id))

    data = monitor_socket.recv(1024)
    if data:
        packet_size, prot_version, subscription_count = struct.unpack("!IiI", data[:12])
        print("  Data:")
        print("    Size     : {}".format(packet_size))
        print("    Version  : {}".format(prot_version))
        print("    Sub count: {}".format(subscription_count))
    else:
        print("  NO DATA")

    ok = con.RevokePropertySubscription(destination_id, subscription_id)
    print("  Revoke subscription result: {}".format(ok))

    ok = con.ClosePropertySubscriptionDestination(destination_id)
    print("  Close subscription result: {}".format(ok))

    monitor_socket.close()
    if data:
        print("  Received {} bytes".format(len(data)))
    else:
        print("  NO DATA")

    ok = con.RevokePropertySubscription(destination_id, subscription_id)
    print("  Revoke subscription result: {}".format(ok))

    ok = con.ClosePropertySubscriptionDestination(destination_id)
    print("  Close subscription result: {}".format(ok))

    monitor_socket.close()
```